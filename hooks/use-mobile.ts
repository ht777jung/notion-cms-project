import { useMediaQuery } from "usehooks-ts";

const MOBILE_BREAKPOINT = 768;

// usehooks-ts의 useMediaQuery를 래핑하여 모바일 여부를 반환.
// SSR 하이드레이션 불일치 방지를 위해 초기값: false, 마운트 후 실제 미디어쿼리 결과.
export function useIsMobile() {
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`, {
    initializeWithValue: false,
  });
}
