import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // twMerge는 tailwind-merge 라이브러리를 사용,
  // 동일한 테일윈드 클래스가 여러 개일때, 나중에 오는 클래스가 우선되도록 병합
}
