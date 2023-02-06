# @treedom/commercetools-where-string-builder

A simple programmatic builder for CommerceTools `where` [Query Predicates](https://docs.commercetools.com/api/predicates/query)

Performs stringification and quote escaping for string, boolean and numerical values

## Usage

```typescript
import { Field, Equals, And } from "@treedom/commercetools-where-string-builder";

Field(
  "masterData",
  "current",
  "masterVariant",
  And(
    Equals("key", "my-variant-key"),
    Field(
      "attributes",
      And(
        Equals("name", "my-attribute-key"),
        Equals("value", "my-attribute-value")
      )
    )
  )
);
```

This snippet builds the following where query string

```
masterData(current(masterVariant((key = "my-variant-key") and (attributes((name = "my-attribute-key") and (value = "my-attribute-value"))))))
```

## Predicates

### Field: (...fields: Array&lt;string&gt;) => string

```typescript
Field("bar", "baz", "foo"); // bar(baz(foo)))
```

### And: (...fields: Array<string | Array<string>>) => string

```typescript
And("bar", "baz"); // (bar) and (baz)
```

### Or: (...fields: Array<string | Array<string>>) => string

```typescript
Or("bar", "baz"); // (bar) or (baz)
```

### Compare: (field: string, operator: "=" | "!=" | ">" | "<" | ">=" | "<=" | "<>", value: number | boolean | string) => string

```typescript
Compare("bar", "<=", 5); // bar <= 5
```

### Equals: (field: string, value: number | boolean | string) => string

```typescript
Equals("bar", 5); // bar = 5
```

### NotEquals: (field: string, value: number | boolean | string) => string

```typescript
NotEquals("bar", 5); // bar != 5
```

### GreaterThan: (field: string, value: number | string) => string

```typescript
GreaterThan("bar", 5); // bar > 5
```

### LessThan: (field: string, value: number | string) => string

```typescript
LessThan("bar", 5); // bar > 5
```

### GreaterOrEqualThan: (field: string, value: number | string) => string

```typescript
GreaterOrEqualThan("bar", 5); // bar >= 5
```

### LessOrEqualThan: (field: string, value: number | string) => string

```typescript
LessOrEqualThan("bar", 5); // bar <= 5
```

### Contains: (field: string, kind: "any" | "all", values: Array<number | boolean | string>) => string

```typescript
Contains("bar", "any", ["str", 123, true]); // bar contains any ("str", 123, true)
```

### ContainsAll: (field: string, values: Array<number | boolean | string>) => string

```typescript
ContainsAll("bar", ["str", 123, true]); // bar contains all ("str", 123, true)
```

### ContainsAny: (field: string, values: Array<number | boolean | string>) => string

```typescript
ContainsAny("bar", ["str", 123, true]); // bar contains any ("str", 123, true)
```

### In: (field: string, values: Array<number | boolean | string>) => string

```typescript
In("bar", ["str", 123, true]); // bar in ("str", 123, true)
```

### NotIn: (field: string, values: Array<number | boolean | string>) => string

```typescript
NotIn("bar", ["str", 123, true]); // bar not in ("str", 123, true)
```

### IsDefined: (field: string) => string

```typescript
IsDefined("bar"); // bar is defined
```

### IsNotDefined: (field: string) => string

```typescript
IsNotDefined("bar"); // bar is defined
```

### HasChanged: (field: string) => string

```typescript
HasChanged("bar"); // bar has changed
```

### HasNotChanged: (field: string) => string

```typescript
HasNotChanged("bar"); // bar has not changed
```

### WithinCircle: (field: string, latitude: number, longitude: number, radius: number) => string

```typescript
WithinCircle("bar", 75.2345, 12.2345, 100); // bar within circle(75.2345, 12.2345, 100)
```
