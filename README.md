# Interface vs Type in TypeScript

The key differences between interfaces and types in TypeScript

---

## 1. Object Shape

**Explanation:** Both Type and Interface can define Object shapes. Type use the keyword 'type' and Interface use the keyword 'interface'

### ✅ Example using Type:

```ts
type User = {
  userName: string;
  password: string | number;
}
```

### ✅ Example using Interface:

```ts
interface User{
  userName: string;
  password: string | number;
}
```

---

## 2. Extension

**Explanation:** Type uses intersection(&) to extend other types, while interface uses the 'extends' keyword.

### ✅ Example using Type:

```ts
type Animal = {
  name: string;
};
type Dog = Animal & {breed: string};
```

### ✅ Example using Interface:

```ts
interface Animal{
  name: string;
}
interface Dog extends Animal{
  breed: string;
}
```

---

## 3. Merged with Other

**Explanation:** An Interface can be merged with other interface, while a Type cannot be merged.

### ✅ Example using Interface:

```ts
interface User{
  name: string;
  password: string
};
interface User{
  age: number
}
```

### ❌ Example using Type :

```ts
type User = {
  name: string;
  password: string
}
type User = {
  age: number
}
//Error: Duplicate identifier 'User'
```
## 4. Used With Primitives

**Explanation:** Type Aliases can be used with Primitives, While Interface cannot.

### ✅ Example using Type:

```ts
type Name = string;

const user: Name = "Nahaz"
```

### ❌ Example using Interface :

```ts
interface Name = string;
❌ //Error
```
---
