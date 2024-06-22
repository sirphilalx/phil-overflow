// import { type ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// export const getTimeStamp = (createdAt: Date): string => {
//   const now = new Date();
//   const diff = Math.abs(now.getTime() - createdAt.getTime());

//   const seconds = Math.floor(diff / 1000);
//   const minutes = Math.floor(seconds / 60);
//   const hours = Math.floor(minutes / 60);
//   const days = Math.floor(hours / 24);
//   const weeks = Math.floor(days / 7);
//   const months = Math.floor(days / 30); // Approximate value
//   const years = Math.floor(days / 365); // Approximate value

//   if (years > 0) {
//     return years === 1 ? "1 year ago" : `${years} years ago`;
//   } else if (months > 0) {
//     return months === 1 ? "1 month ago" : `${months} months ago`;
//   } else if (weeks > 0) {
//     return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
//   } else if (days > 0) {
//     return days === 1 ? "1 day ago" : `${days} days ago`;
//   } else if (hours > 0) {
//     return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
//   } else if (minutes > 0) {
//     return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
//   } else {
//     return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
//   }
// };

// export const formatLargeNumber = (num: number): string => {
//   if (num >= 1000000) {
//     return (num / 1000000).toFixed(1) + "M";
//   } else if (num >= 1000) {
//     return (num / 1000).toFixed(1) + "K";
//   } else {
//     return num.toString();
//   }
// };

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date | string): string => {
  const date = new Date(createdAt);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const now = new Date();
  const diff = Math.abs(now.getTime() - date.getTime());

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // Approximate value
  const years = Math.floor(days / 365); // Approximate value

  if (years > 0) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (months > 0) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (weeks > 0) {
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  } else if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
    return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
  }
};

export const formatLargeNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};
