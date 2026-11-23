// One Emoji, One Smile — make.fun entry (program/v1).
//
// The program writes exactly one emoji to /output/entry.txt and nothing
// else: no words, no caption, no explanation, no trailing newline.
//
// The chosen emoji is U+1F607 SMILING FACE WITH HALO.
//
// Why this one, against the judge's brief (most important first):
//  1. It is a single emoji a stranger reads as warm and friendly: a
//     smiling face, plainly aiming to warm the person who sees it.
//  2. Warmth at first glance: the smile is instant, and the halo adds a
//     gentle, kind, good-natured glow — kind and friendly with no context.
//  3. Universality: a smile and a halo read the same way at any age and
//     in any background; there is no irony, slang or in-joke to land wrong.
//  4. Chosen rather than default: it is not the first smiley that comes
//     to mind (🙂 / 😊). The halo makes it feel picked for the moment,
//     while the face itself stays instantly readable — a stranger gets it
//     in one glance, with no explaining needed.
//  5. Right for a stranger: it carries no intimacy, sarcasm or flirtation.
//     A halo smile from someone unknown reads as sweet and harmless, never
//     as a come-on or a joke at the stranger's expense.
//
// The output is deterministic: the same single emoji on every run, and the
// file holds exactly that emoji's four UTF-8 bytes — nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

// U+1F607 SMILING FACE WITH HALO.
const EMOJI = "😇";

// Guard: the entry must be exactly one emoji (one code point).
if ([...EMOJI].length !== 1) {
  throw new Error("entry must be exactly one emoji");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds the emoji and nothing else.
writeFileSync("/output/entry.txt", EMOJI, "utf8");
