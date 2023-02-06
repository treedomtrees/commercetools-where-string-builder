import tap from "tap";
import {
  And,
  Contains,
  ContainsAll,
  ContainsAny,
  Equals,
  Field,
  GreaterOrEqualThan,
  GreaterThan,
  HasChanged,
  HasNotChanged, In,
  IsDefined,
  IsNotDefined,
  LessOrEqualThan,
  LessThan,
  NotEquals, NotIn,
  Or,
  WithinCircle
} from "../src";

tap.test("test Field", async (t) => {
  t.same(Field("foo"), "foo", "should stringify single field");
  t.same(
    Field("foo", "bar", "baz"),
    "foo(bar(baz))",
    "should stringify nested fields"
  );

  t.throws(() => Field());
});

tap.test("test And", async (t) => {
  t.same(And("foo"), "(foo)", "should stringify single value");
  t.same(
    And("foo", "bar", "baz"),
    "(foo) and (bar) and (baz)",
    "should stringify multiple values"
  );
});

tap.test("test Or", async (t) => {
  t.same(Or("foo"), "(foo)", "should stringify single value");
  t.same(
    Or("foo", "bar", "baz"),
    "(foo) or (bar) or (baz)",
    "should stringify multiple values"
  );
});

tap.test("test Equals", async (t) => {
  t.same(
    Equals("foo", "my-string"),
    'foo = "my-string"',
    "should stringify Compare with string"
  );
  t.same(
    Equals("foo", true),
    "foo = true",
    "should stringify Compare with number"
  );
  t.same(
    Equals("foo", 123),
    "foo = 123",
    "should stringify Compare with boolean"
  );
});

tap.test("test NotEquals", async (t) => {
  t.same(
    NotEquals("foo", "my-string"),
    'foo != "my-string"',
    "should stringify Compare with string"
  );
  t.same(
    NotEquals("foo", true),
    "foo != true",
    "should stringify Compare with number"
  );
  t.same(
    NotEquals("foo", 123),
    "foo != 123",
    "should stringify Compare with boolean"
  );
});

tap.test("test GreaterThan", async (t) => {
  t.same(GreaterThan("foo", 123), "foo > 123");
});

tap.test("test LessThan", async (t) => {
  t.same(LessThan("foo", 123), "foo < 123");
});

tap.test("test GreaterOrEqualThan", async (t) => {
  t.same(GreaterOrEqualThan("foo", 123), "foo >= 123");
});

tap.test("test LessOrEqualThan", async (t) => {
  t.same(LessOrEqualThan("foo", 123), "foo <= 123");
});

tap.test("test Contains", async (t) => {
  t.same(
    Contains("foo", "any", ["foo", 123, true]),
    'foo contains any ("foo", 123, true)'
  );
});

tap.test("test ContainsAny", async (t) => {
  t.same(
    ContainsAny("foo", ["foo", 123, true]),
    'foo contains any ("foo", 123, true)'
  );
});

tap.test("test ContainsAll", async (t) => {
  t.same(
    ContainsAll("foo", ["foo", 123, true]),
    'foo contains all ("foo", 123, true)'
  );
});

tap.test("test In", async (t) => {
  t.same(
    In("foo", ["foo", 123, true]),
    'foo in ("foo", 123, true)'
  );
});

tap.test("test NotIn", async (t) => {
  t.same(
    NotIn("foo", ["foo", 123, true]),
    'foo not in ("foo", 123, true)'
  );
});

tap.test("test IsDefined", async (t) => {
  t.same(IsDefined("foo"), "foo is defined");
});

tap.test("test IsNotDefined", async (t) => {
  t.same(IsNotDefined("foo"), "foo is not defined");
});

tap.test("test HasChanged", async (t) => {
  t.same(HasChanged("foo"), "foo has changed");
});

tap.test("test HasNotChanged", async (t) => {
  t.same(HasNotChanged("foo"), "foo has not changed");
});

tap.test("test WithinCircle", async (t) => {
  t.same(
    WithinCircle("foo", 12.34, 56.7891, 100),
    "foo within circle(12.34, 56.7891, 100)"
  );
});
