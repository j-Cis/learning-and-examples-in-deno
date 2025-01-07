import { assertEquals } from "@std/assert";
// @ts-ignore <ts(2307)> (lokalny moduł)
import { add, subtract } from "@j-Cis/mod-deno-math";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function addTest() {
  assertEquals(subtract(2, 3), -1);
});
