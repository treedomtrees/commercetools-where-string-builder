import tap from "tap";
import { safeString, stringifyValue } from "../src/utils";

tap.test("test safeString", async (t) => {
  t.same(safeString`foo ${100} bar ${"baz"}`, "foo 100 bar baz");
  t.throws(() => safeString`foo ${undefined} bar`);
});

tap.test("test stringifyValue", async (t) => {
  t.same(stringifyValue("bar"), '"bar"');
  t.same(stringifyValue(123), "123");
  t.same(stringifyValue(true), "true");
});
