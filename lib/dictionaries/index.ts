import { en } from "./en";
import { fr } from "./fr";
import type { Dictionary } from "./types";
import type { Locale } from "@/lib/locales";

export const dictionaries: Record<Locale, Dictionary> = {
  fr,
  en
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
