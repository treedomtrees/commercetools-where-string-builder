# @treedom/commercetools-where-string-builder

<a href="https://www.treedom.net/it/organization/treedom/event/treedom-open-source?utm_source=github"><img src="https://badges.treedom.net/badge/f/treedom-open-source?utm_source=github" alt="plant-a-tree" border="0" /></a>

A simple programmatic builder for CommerceTools `where` [Query Predicates](https://docs.commercetools.com/api/predicates/query)

Performs stringification and quote escaping for string, boolean and numerical values

__Made with ❤️ at&nbsp;&nbsp;[<img src="https://assets.treedom.net/image/upload/manual_uploads/treedom-logo-contrib_gjrzt6.png" height="24" alt="Treedom" border="0" align="top" />](#-join-us-in-making-a-difference-)__, [join us in making a difference](#-join-us-in-making-a-difference-)!

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

## 🌳 Join Us in Making a Difference! 🌳

We invite all developers who use Treedom's open-source code to support our mission of sustainability by planting a tree with us. By contributing to reforestation efforts, you help create a healthier planet and give back to the environment. Visit our [Treedom Open Source Forest](https://www.treedom.net/en/organization/treedom/event/treedom-open-source) to plant your tree today and join our community of eco-conscious developers.

Additionally, you can integrate the Treedom GitHub badge into your repository to showcase the number of trees in your Treedom forest and encourage others to plant new ones. Check out our [integration guide](https://github.com/treedomtrees/.github/blob/main/TREEDOM_BADGE.md) to get started.

Together, we can make a lasting impact! 🌍💚

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting a pull request.

## License

This project is licensed under the MIT License.