export const CODE_SNIPPETS = {
  NOMAD_BADGE_HOOK: `import { useQueries } from "@tanstack/react-query";
import { getMyActivityList } from "@/apis/myActivities.api";
import { getMyReservationList } from "@/apis/myReservations.api";
import calculateLevel from "@/app/mypage/_libs/calculateLevel";

export function useUserBadge() {
  const results = useQueries({
    queries: [
      {
        queryKey: ["myActivities", "badge"],
        queryFn: () => getMyActivityList({ cursorId: null }),
        staleTime: 0,
      },
      {
        queryKey: ["myReservations", "badge"],
        queryFn: () => getMyReservationList({ cursorId: null }),
        staleTime: 0,
      },
    ],
  });

  const isLoading = results.some((result) => result.isLoading);
  const [reviewQuery, activityQuery] = results;
  const totalCount =
    (reviewQuery.data?.totalCount || 0) + (activityQuery.data?.totalCount || 0);

  const { badgeLevel, badgeName } = calculateLevel(totalCount);

  return { badgeLevel, badgeName, isLoading };
}
;`,
  NOMAD_REPORT_HOOK: `"use client";

import { useQueries } from "@tanstack/react-query";
import { getMyActivityList } from "@/apis/myActivities.api";
import { getMyReservationList } from "@/apis/myReservations.api";
import { useAuth } from "@/commons/contexts/AuthContext";
import { useMemo } from "react";
import { getActivityDetail } from "@/apis/activities.api";

export function useNomadReport() {
  const { user } = useAuth();

  const results = useQueries({
    queries: [
      {
        queryKey: ["myReservation", "nomadReport"],
        queryFn: () => getMyReservationList({ cursorId: null, size: 30 }),
        staleTime: Infinity,
        gcTime: 1000 * 60 * 5,
      },
      {
        queryKey: ["myActivities", "nomadReport"],
        queryFn: () => getMyActivityList({ cursorId: null, size: 30 }),
        staleTime: Infinity,
        gcTime: 1000 * 60 * 5,
      },
    ],
  });

  const isBaseLoading = results.some((result) => result.isLoading);
  const [reservationQuery, activityQuery] = results;

  const topReservationIds = useMemo(() => {
    const reservations = reservationQuery.data?.reservations || [];
    if (reservations.length === 0) return [];

    const countMap: Record<number, number> = {};
    reservations.forEach((item) => {
      const id = item.activity.id;
      countMap[id] = (countMap[id] || 0) + 1;
    });

    return Object.entries(countMap)
      .sort((a, b) => b[1] - a[1])
      .map(([id]) => Number(id))
      .slice(0, 3);
  }, [reservationQuery.data]);

  const topActivityIds = useMemo(() => {
    const activities = activityQuery.data?.activities || [];
    if (activities.length === 0) return [];
    return [...activities]
      .sort((a, b) => b.reviewCount - a.reviewCount)
      .slice(0, 3)
      .map((item) => item.id);
  }, [activityQuery.data]);

  const detailResults = useQueries({
    queries: [
      ...topReservationIds.map((id) => ({
        queryKey: ["reportReservation", id],
        queryFn: () => getActivityDetail(id),
        staleTime: Infinity,
        gcTime: 1000 * 60 * 10,
        retry: false,
        enabled: !isBaseLoading,
      })),
      ...topActivityIds.map((id) => ({
        queryKey: ["reportActivity", id],
        queryFn: () => getActivityDetail(id),
        staleTime: Infinity,
        enabled: !isBaseLoading,
      })),
    ],
  });

  const isDetailLoading = detailResults.some((r) => r.isLoading);
  const isLoading = isBaseLoading || isDetailLoading;

  const validReservation = detailResults
    .slice(0, topReservationIds.length)
    .find((r) => r.isSuccess && r.data)?.data;

  const validActivity = detailResults
    .slice(topReservationIds.length)
    .find((r) => r.isSuccess && r.data)?.data;

  const historyLog = useMemo(() => {
    const reservations = reservationQuery.data?.reservations || [];
    const activities = activityQuery.data?.activities || [];

    const statusCounts = reservations.reduce<Record<string, number>>(
      (map, item) => {
        map[item.status] = (map[item.status] || 0) + 1;
        return map;
      },
      {},
    );

    const sortedStatus = Object.entries(statusCounts).sort(
      (a, b) => b[1] - a[1],
    )[0];

    return {
      mostStatus: sortedStatus ? sortedStatus[0] : "",
      mostStatusCount: sortedStatus ? sortedStatus[1] : 0,
      unreviewedCount: reservations.filter(
        (r) => r.status === "completed" && !r.reviewSubmitted,
      ).length,
      completedTotalCount: reservations.filter((r) => r.status === "completed")
        .length,
      totalReviewCount: activities.reduce(
        (acc, cur) => acc + cur.reviewCount,
        0,
      ),
      hasReservation: reservations.length > 0,
      hasActivity: activities.length > 0,
    };
  }, [reservationQuery.data, activityQuery.data]);

  return {
    reservationData: reservationQuery.data,
    activityData: activityQuery.data,
    mostReservation: {
      data: validReservation,
      count: validReservation
        ? reservationQuery.data?.reservations.filter(
            (r) => r.activity.id === validReservation.id,
          ).length || 0
        : 0,
    },
    mostActivity: {
      data: validActivity,
      count: validActivity
        ? activityQuery.data?.activities.find((a) => a.id === validActivity.id)
            ?.reviewCount || 0
        : 0,
    },
    historyLog,
    isLoading,
    user,
  };
}
`,
  NOMAD_BFF_PROXY: `import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { tryRefresh, clearAuthCookies } from "@/apis/auth.server";

const API_BASE = process.env.API_BASE_URL;

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";
type RouteParams = { params: Promise<{ path: string[] }> };

async function proxy(req: NextRequest, path: string[], method: HttpMethod) {
  if (!API_BASE) {
    throw new Error("환경 변수 API_BASE_URL이 설정되지 않았습니다.");
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  const refreshToken = cookieStore.get("refresh_token")?.value;

  const targetUrl = \`\${API_BASE}/\${path.join("/")}\${new URL(req.url).search}\`;
  const contentType = req.headers.get("content-type") ?? "";
  const isMultipart = contentType.includes("multipart/form-data");

  const headers: HeadersInit = {
    "Content-Type": isMultipart ? contentType : "application/json",
    ...(token && { Authorization: \`Bearer \${token}\` }),
  };

  let body: BodyInit | undefined;
  try {
    if (method !== "GET") {
      body = isMultipart
        ? await req.blob()
        : JSON.stringify(await req.json().catch(() => ({})));
    }

    const res = await fetch(targetUrl.toString(), { method, headers, body });

    if (res.status === 401) {
      const errorData = await res.json().catch(() => ({}));
      const unauthorizedResponse = NextResponse.json(errorData, {
        status: 401,
      });

      const newToken = await tryRefresh(unauthorizedResponse, refreshToken);

      if (newToken) {
        headers["Authorization"] = \`Bearer \${newToken}\`;
        const retryRes = await fetch(targetUrl, { method, headers, body });
        const retryData = await retryRes.json().catch(() => ({}));
        const finalResponse = NextResponse.json(retryData, {
          status: retryRes.status,
        });

        finalResponse.cookies.set("access_token", newToken, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 30,
        });
        return finalResponse;
      } else {
        clearAuthCookies(unauthorizedResponse);
        return unauthorizedResponse;
      }
    }

    const data = res.status === 204 ? null : await res.json().catch(() => ({}));
    if (res.status === 204) {
      return new NextResponse(null, { status: 204 });
    }
    const response = NextResponse.json(data, { status: res.status });

    return response;
  } catch {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest, { params }: RouteParams) {
  const { path } = await params;
  return proxy(req, path, "GET");
}

export async function POST(req: NextRequest, { params }: RouteParams) {
  const { path } = await params;
  return proxy(req, path, "POST");
}

export async function PATCH(req: NextRequest, { params }: RouteParams) {
  const { path } = await params;
  return proxy(req, path, "PATCH");
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  const { path } = await params;
  return proxy(req, path, "DELETE");
}
`,
  NOMAD_META_TAG: `import localFont from "next/font/local";
import "@/commons/styles/globals.css";
import { Metadata } from "next";
import ReactQueryProvider from "@/commons/contexts/ReactQueryProvider";
import { AuthProvider } from "@/commons/contexts/AuthContext";
import { DialogProvider } from "@/components/ui/Dialog";
import { ModalProvider } from "@/components/ui/Modal";
import NotificationProvider from "@/commons/contexts/NotificationProvider";
import { Toaster } from "@/components/ui/Sonner/Sonner";
import { cookies } from "next/headers";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "글로벌 노마드 | Global Nomad",
    template: "%s | 글로벌 노마드",
  },
  description:
    "전 세계의 특별한 체험을 탐색하고 간편하게 예약하세요. 지도와 캘린더 SDK를 활용하여 나만의 액티비티를 즐기는 가장 스마트한 방법, 글로벌 노마드입니다.",
  keywords: [
    "글로벌노마드",
    "GlobalNomad",
    "체험탐색",
    "액티비티예약",
    "여행체험",
    "캘린더예약",
    "지도기능",
  ],
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "글로벌 노마드 | Global Nomad - 특별한 체험 탐색과 예약",
    description:
      "SDK 리서치 역량을 바탕으로 구현된 정교한 지도와 캘린더 뷰를 통해, 복잡한 체험 탐색부터 예약 신청까지 유기적으로 경험해보세요.",
    url: "https://21-sprint-1team-globalnomad.vercel.app",
    siteName: "글로벌 노마드",
    images: [
      {
        url: "/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "글로벌 노마드 메인 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "글로벌 노마드 | Global Nomad",
    description:
      "다양한 체험 상품 탐색부터 실시간 예약 신청까지, 글로벌 노마드에서 당신만의 특별한 일상을 완성해보세요.",
    images: ["/images/og_image.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const hasSession =
    cookieStore.has("access_token") || cookieStore.has("refresh_token");

  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={pretendard.className}>
        <ReactQueryProvider>
          <AuthProvider initialSession={hasSession}>
            <DialogProvider>
              <ModalProvider>
                {children}
                <NotificationProvider />
                <Toaster />
              </ModalProvider>
            </DialogProvider>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
`,
  NOMAD_DETAIL_META_TAG: `export const revalidate = 60;

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const activityId = Number(id);
  const activity = await getActivityDetail(activityId);

  return {
    title: activity.title,
    description: activity.description.slice(0, 150),
    openGraph: {
      title: activity.title,
      description: activity.description,
      images: [activity.bannerImageUrl],
    },
  };
}`,
  NOMAD_AUTH_LOGO: `"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import authLogoData from "../_libs/auth_logo.json";
import { LottieRefCurrentProps } from "lottie-react";
import { cn } from "@/commons/utils/cn";
import Link from "next/link";
import Image from "next/image";

export default function AuthLogo() {
  const [isLottieLoaded, setIsLottieLoaded] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      lottieRef.current?.play();

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        lottieRef.current?.pause();
      }, 500);
    };

    window.addEventListener("typing-start", handleTyping);

    return () => {
      window.removeEventListener("typing-start", handleTyping);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  return (
    <Link
      className="flex flex-col items-center"
      href="/"
      aria-label="글로벌노마드 홈으로 이동"
    >
      <div
        style={{
          width: "300px",
          height: "300px",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/logo-symbol.svg"
          alt="글로벌노마드 로고"
          width={144}
          height={144}
          priority
          className={cn(
            "absolute transition-opacity duration-300",
            isLottieLoaded ? "opacity-0" : "opacity-100",
          )}
        />

        <Lottie
          lottieRef={lottieRef}
          animationData={authLogoData}
          autoplay={false}
          loop={true}
          onDOMLoaded={() => setIsLottieLoaded(true)}
          className={cn(
            "absolute transition-opacity duration-300",
            isLottieLoaded ? "opacity-100" : "opacity-0",
          )}
          style={{
            top: "50%",
            left: "50%",
            width: "144px",
            height: "144px",
            transform: "translate(-50%, -50%) scale(4.4) translate(3.5px, 2px)",
          }}
        />
      </div>

      <Image
        width={255}
        height={31}
        src="/images/logo-text.svg"
        alt="글로벌노마드"
        priority
        className="hidden md:block mt-[-53.5px]"
      />
    </Link>
  );
}
`,
  TASKIFY_CARD_TAG: `// 태그 추가 및 변경
const handleKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  currentTags: string[],
  onChange: (value: string[]) => void,
) => {
  if (e.nativeEvent.isComposing) return; // 한글 입력 중복 방지

  if (e.key === "Enter") {
    e.preventDefault();
    const value = e.currentTarget.value.trim();

    if (value) {
      setTagList((prev) => [...prev, getTagColor(value)]);
      onChange([...(currentTags || []), value]);
      e.currentTarget.value = "";
    }
  }

  if (e.key === "Backspace" && e.currentTarget.value === "") {
    const newList = [...tagList];
    newList.pop();
    setTagList(newList);
    onChange(newList.map((tag) => tag.name));
  }
};`,
  TASKIFY_COMM_CRUD: `// 댓글 수정
const UpdateComment = async (commentId: number, content: string) => {
  if (!content.trim() || isSubmitting) return;

  try {
    setIsSubmitting(true);
    const res = await putComments(commentId, content);
    if (res) {
      setCommentList((prev) =>
        prev.map((comment) => (comment.id === commentId ? res : comment)),
      );
    }
  } finally {
    setIsSubmitting(false);
  }
};

// 댓글 삭제
const DeleteComment = async (commentId: number) => {
  if (!commentId || isSubmitting) return;

  try {
    setIsSubmitting(true);
    const res = await deleteComments(commentId);
    if (res.status === 204 || res.status === 200) {
      setCommentList((prev) => prev.filter((c) => c.id !== commentId));
    }
  } finally {
    setIsSubmitting(false);
  }
};`,
  TASKIFY_INPUT: `interface InputProps<T extends FieldValues> {
  label: string;
  field: ControllerRenderProps<T, Path<T>>;
  type?: string;
  placeholder: string;
  required?: boolean;
  error?: string | null;
  labelSize?: keyof typeof FONT_SIZE_VARIANTS;
  labelWeight?: keyof typeof WEIGHT_VARIANTS;
  inputSize?: keyof typeof FONT_SIZE_VARIANTS;
  errorSize?: keyof typeof FONT_SIZE_VARIANTS;

  readOnly?:boolean;
}

export function Input<T extends FieldValues>({
  label,
  field,
  type = "text",
  placeholder,
  required = false,
  error,
  labelSize = "labelMd",
  labelWeight = "medium",
  inputSize = "inputMd",
  errorSize = "errorMd",

  readOnly = false,
}: InputProps<T>) {
  const id = useId();

  const [showPw, setShowPw] = useState(false);
  const inputType = type === "password" ? (showPw ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-[8px]">
      <label
        htmlFor={id}
        className={clsx(
          FONT_SIZE_VARIANTS[labelSize],
          WEIGHT_VARIANTS[labelWeight],
          "text-black-medium",
        )}
      >
        {label}
        {required && (
          <span className="text-md tablet:text-lg font-regular text-violet-main ml-[8px]">
            *
          </span>
        )}
      </label>
      <div className="relative">
        <input
          {...field}
          type={inputType}
          id={id}
          placeholder={placeholder}
          readOnly = {readOnly}
          className={clsx(
            "w-full h-[50px] border rounded-[8px] outline-none",
            FONT_SIZE_VARIANTS[inputSize],
            "font-regular text-black-medium",
            "px-[16px] py-[12px]",
            type === "password" ? "pr-[40px]" : "",
            error ? "border-red-point" : "border-gray-base",
            "focus:border-violet-main",
            "placeholder:text-gray-medium",
            readOnly && "bg-gray-base cursor-default"
          )}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute top-[50%] right-[13px] tablet:right-[16px] w-[24px] h-[24px] -translate-y-1/2 cursor-pointer"
            aria-label={showPw ? "비밀번호 숨기기" : "비밀번호 보이기"}
            onClick={() => setShowPw((prev) => !prev)}
          >
            <Image
              fill
              src={
                showPw
                  ? "/icons/common/eye_open.svg"
                  : "/icons/common/eye_close.svg"
              }
              alt=""
            />
          </button>
        )}
      </div>
      {error && (
        <div
          className={clsx(
            FONT_SIZE_VARIANTS[errorSize],
            "font-regular text-red-point",
          )}
        >
          {error}
        </div>
      )}
    </div>
  );
}
`,
  TASKIFY_SCHEMA: `export const CardFormSchema = z.object({
  assigneeUserId: z.number(),
  dashboardId: z.number(),
  columnId: z.number(),
  cardId: z.number().optional().nullable(),
  title: z.string().nonempty("제목을을 입력해주세요."),
  description: z.string().nonempty("설명을 입력해주세요."),
  dueDate: z.string().nonempty("날짜를 선택해주세요."),
  tags: z
    .array(z.string())
    .nonempty("태그를 1개 이상 입력해주세요.")
    .refine((items) => new Set(items).size === items.length, {
      message: "중복된 태그가 있습니다.",
    }),
  imageUrl: z
    .union([z.string(), z.instanceof(File)])
    .refine((val) => {
      if (!val || (Array.isArray(val) && val.length === 0)) return false;
      return true;
    }, "이미지는 필수입니다.")
    .superRefine((val, ctx) => {
      // 파일 객체인 경우에만 상세 검증 (문자열 URL일 때는 통과)
      if (val instanceof File) {
        // 크기 제한
        if (val.size > 5 * 1024 * 1024) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "최대 파일 크기는 5MB입니다.",
          });
        }
        // 형식 제한
        const ACCEPTED_TYPES = [
          "image/jpeg",
          "image/jpg",
          "image/png",
          "image/webp",
        ];
        if (!ACCEPTED_TYPES.includes(val.type)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "JPG, JPEG, PNG, WEBP 형식만 지원합니다.",
          });
        }
      }
    }),
});
export type CardFormValues = z.infer<typeof CardFormSchema>;

const {
    control,
    formState: { errors, isValid, isDirty },
    setValue,
    handleSubmit: handleSubmit,
  } = useForm<CardFormValues>({
    resolver: zodResolver(CardFormSchema),
    mode: "all",
    defaultValues: {
      dashboardId: dashboardId,
      columnId: initialData?.columnId || columnId,
      assigneeUserId: initialData?.assignee.id,
      cardId: initialData?.id || null,
      title: initialData?.title || "",
      description: initialData?.description || "",
      dueDate: initialData?.dueDate || "",
      tags: initialData?.tags || [],
      imageUrl: initialData?.imageUrl || "",
    },
  });`,
  TASKIFY_MEMEROY_ASYNC: `// 1. 비동기 데이터 페칭 최적화
useEffect(() => {
  const fetchData = async () => {
    if (dashboardId) await getMemberList();
    if (initialData?.id) await getColumnList();
  };
  fetchData();
}, [initialData?.id, dashboardId, getMemberList, getColumnList]);

// 2. 동적 자원 메모리 누수 방지 (Cleanup)
useEffect(() => {
  return () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
  };
}, [previewUrl]);`,
  TASKIFY_DESIGH_GUIDE: `@import "tailwindcss";

@theme {
  /* 스타일 */
  --font-pretendard: "Pretendard", sans-serif;

  /* 사이즈 */
  --font-size-4xl: 48px;
  --font-size-3xl: 32px;
  --font-size-xl2: 28px;
  --font-size-2xl: 24px;
  --font-size-lg2: 22px;
  --font-size-xl: 20px;
  --font-size-2lg: 18px;
  --font-size-lg: 16px;
  --font-size-md: 14px;
  --font-size-sm: 13px;
  --font-size-xs: 12px;
  --font-size-xs-tight: 12px;

  /* 줄높이 */
  --line-height-4xl: 58px;
  --line-height-3xl: 42px;
  --line-height-xl2: 38px;
  --line-height-2xl: 32px;
  --line-height-xl: 32px;
  --line-height-lg2: 30px;
  --line-height-2lg: 26px;
  --line-height-lg: 26px;
  --line-height-md: 24px;
  --line-height-sm: 22px;
  --line-height-xs: 20px;
  --line-height-xs-tight: 18px;

  /* 굵기 */
  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-medium: 500;
  --font-weight-regular: 400;

  /* 컬러 */
  --color-violet-main: #5534da;
  --color-violet-light: #f1effd;
  --color-purple-deep: #760dde;
  --color-pink-main: #e876ea;

  --color-black-pure: #000000;
  --color-black-dark: #171717;
  --color-black-medium: #333236;
  --color-black-light: #4b4b4b;

  --color-gray-dark: #787486;
  --color-gray-medium: #9fa6b2;
  --color-gray-base: #d9d9d9;
  --color-gray-light: #eeeeee;
  --color-gray-bg: #fafafa;
  --color-gray-surface: #f9fafb;

  --color-red-point: #d6173a;
  --color-green-point: #7ac555;
  --color-orange-point: #ffa500;
  --color-blue-point: #76a5ea;

  --color-white: #ffffff;

  /* Breakpoints 추가 */
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1024px;
}

@layer base {
  body {
    font-family: var(--font-pretendard), sans-serif;
  }

  * {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  button:disabled,
  button.disabled {
    cursor: default;
  }
}

@layer utilities {
  .text-4xl {
    font-size: var(--font-size-4xl);
    line-height: var(--line-height-4xl);
  }
  .text-3xl {
    font-size: var(--font-size-3xl);
    line-height: var(--line-height-3xl);
  }
  .text-xl2 {
    font-size: var(--font-size-xl2);
    line-height: var(--line-height-xl2);
  }
  .text-2xl {
    font-size: var(--font-size-2xl);
    line-height: var(--line-height-2xl);
  }
  .text-lg2 {
    font-size: var(--font-size-lg2);
    line-height: var(--line-height-lg2);
  }
  .text-xl {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
  }
  .text-2lg {
    font-size: var(--font-size-2lg);
    line-height: var(--line-height-2lg);
  }
  .text-lg {
    font-size: var(--font-size-lg);
    line-height: var(--line-height-lg);
  }
  .text-md {
    font-size: var(--font-size-md);
    line-height: var(--line-height-md);
  }
  .text-sm {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);
  }
  .text-xs {
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);
  }
  .text-xs-tight {
    font-size: var(--font-size-xs-tight);
    line-height: var(--line-height-xs-tight);
  }
}

@media (min-width: 768px) {
  .tablet:text-4xl {
    font-size: var(--font-size-4xl);
    line-height: var(--line-height-4xl);
  }
  .tablet:text-3xl {
    font-size: var(--font-size-3xl);
    line-height: var(--line-height-3xl);
  }
  .tablet:text-xl2 {
    font-size: var(--font-size-xl2);
    line-height: var(--line-height-xl2);
  }
  .tablet:text-2xl {
    font-size: var(--font-size-2xl);
    line-height: var(--line-height-2xl);
  }
  .tablet:text-lg2 {
    font-size: var(--font-size-lg2);
    line-height: var(--line-height-lg2);
  }
  .tablet:text-xl {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
  }
  .tablet:text-2lg {
    font-size: var(--font-size-2lg);
    line-height: var(--line-height-2lg);
  }
  .tablet:text-lg {
    font-size: var(--font-size-lg);
    line-height: var(--line-height-lg);
  }
  .tablet:text-md {
    font-size: var(--font-size-md);
    line-height: var(--line-height-md);
  }
  .tablet:text-sm {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);
  }
  .tablet:text-xs {
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);
  }
  .tablet:text-xs-tight {
    font-size: var(--font-size-xs-tight);
    line-height: var(--line-height-xs-tight);
  }
}

@media (min-width: 1920px) {
  .desktop:text-4xl {
    font-size: var(--font-size-4xl);
    line-height: var(--line-height-4xl);
  }
  .desktop:text-3xl {
    font-size: var(--font-size-3xl);
    line-height: var(--line-height-3xl);
  }
  .desktop:text-xl2 {
    font-size: var(--font-size-xl2);
    line-height: var(--line-height-xl2);
  }
  .desktop:text-2xl {
    font-size: var(--font-size-2xl);
    line-height: var(--line-height-2xl);
  }
  .desktop:text-lg2 {
    font-size: var(--font-size-lg2);
    line-height: var(--line-height-lg2);
  }
  .desktop:text-xl {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
  }
  .desktop:text-2lg {
    font-size: var(--font-size-2lg);
    line-height: var(--line-height-2lg);
  }
  .desktop:text-lg {
    font-size: var(--font-size-lg);
    line-height: var(--line-height-lg);
  }
  .desktop:text-md {
    font-size: var(--font-size-md);
    line-height: var(--line-height-md);
  }
  .desktop:text-sm {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);
  }
  .desktop:text-xs {
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);
  }
  .desktop:text-xs-tight {
    font-size: var(--font-size-xs-tight);
    line-height: var(--line-height-xs-tight);
  }
}
`,
  TASKIFY_TOAST: `import toast, { Toaster } from "react-hot-toast";

const baseStyle = {
  maxWidth: "500px",
  fontSize: "var(--text-md)",
  color: "var(--color-black-dark)",
  padding: "12px 20px",
  borderRadius: "8px",
  background: "var(--color-white)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
};

export const showToast = {
  success: (message: string) =>
    toast.success(\`\${message} 🎉\`, {
      duration: 2000,
      icon: null,
    }),
  error: (message: string) =>
    toast.error(\`\${message} 🚨\`, {
      duration: 5000,
      icon: null,
    }),
};

export const ToastProvider = () => {
  return (
    <Toaster
      containerStyle={{
        zIndex: 9999,
      }}
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: baseStyle,
      }}
    />
  );
};
`,
};
