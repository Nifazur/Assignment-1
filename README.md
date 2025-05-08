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

&nbsp;
# Next Topic
&nbsp;


# Union '|' And Intersection '&' Type in TypeScript



## 1. Union Type ( | ) :

**Explanation:** A union Allows a value to be any one of seceral type

### ✅ Example:

```ts
type ID = string | number;
let userId: ID;
userId = 123; // Ok
userId = "Nahaz124"; // Ok
userId = true; ❌ Error
``` 
---
**Conclusion:** Union types are useful when a variable can hold more than one possible type, but only one at a time. In my example userId can be string or number, but not any other type.this makes code flexible with type safety    


---


## 2. Intersection ( & )

**Explanation:** An Intersection type combines multiple types into one

### ✅ Example:

```ts
type Person = {
    name: string;
    age: number;
}

type Id = {
    id: number
}
type User = Id & Person

const user1: User = {
    id: 1,
    name: 'Nahaz',
    age: 22
}
console.log(user1)
```

---


**Conclusion:** Intersection types useful when we want a value to satisfy multiple type requirements at the same time

---

