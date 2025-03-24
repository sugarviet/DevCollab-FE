import moment from "moment";

export function timeSince(postDate: string): string {
  return moment(postDate).fromNow();
}