// @ts-ignore <ts(2307)> (lokalny moduł)
import { add, subtract } from "@j-cis/mod-deno-math";


// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
// --module esnext
if (import.meta.main) {
  console.log("1 + 2 =", add(1, 2));
  console.log("2 - 4 =", subtract(2, 4));
}
