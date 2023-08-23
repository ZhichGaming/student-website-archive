import { ReactNode } from "react";

export function Skeleton({ className, children, keyAwaited, times = 1 }: SkeletonProps) {
  let skeletons = [];
  for (let i = 0; i < times; i++) {
    skeletons.push(<div className={`animate-skeleton rounded-full ${className}`} key={i} />);
  }
  return !keyAwaited ? skeletons : children;
}

export function TextSkeleton({ className, w, children, keyAwaited, times = 1, justify = 0 }: TextSkeletonProps) {
  let skeletons = [];

  for (let i = 0; i < times; i++) {
    let width = i == times - 1 ? w - 1 : w;
    if (times > 1) {
      width = i == times - 1 ? w - 1 : w;
    }
    skeletons.push(<div className={`animate-skeleton rounded-full ${className}`} style={{ width: `${width}rem` }} key={i} />);
  }

  // return <div className={`flex flex-col gap-1 items-${justify ? "end" : "start"}`}>{skeletons}</div>;
  return !keyAwaited ? <div className={`flex flex-col gap-1 items-${justify ? "end" : "start"}`}>{skeletons}</div> : children;
}

interface SkeletonProps {
  className: string;
  children: ReactNode;
  keyAwaited: any;
  times?: number;
}

interface TextSkeletonProps extends SkeletonProps {
  /** width of the text block in rem */
  w: number;
  /** 0: left, 1: right */
  justify?: number;
  gap?: number;
}
