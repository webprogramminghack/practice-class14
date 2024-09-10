const a = new Set<string>();
a.add('hello');
a.add(123);

const b = new Set('hello');
b.add('world');
b.add(123);

const c = new Map<string, number>();
c.set('hello', 123);
c.set(123, 'world');

// the difference is that the generic type & interface are not automatically inferred the type
const e: APIResponse = {
  data: {},
  isError: false,
};

// you need to explicitly write the type
const f: APIResponse<Object> = {
  data: {},
  isError: false,
};

type APIResponse<TData> = {
  data: TData;
  isError: boolean;
};

// generic type and interface are blueprints
type UserResponse = APIResponse<{ name: string; age: number }>;
type PostResponse = APIResponse<{ title: string; content: string }>;
type CommentResponse = APIResponse<{ author: string; content: string }>;

interface APIResponse2<TData> {
  data: TData;
  isError: boolean;
}

interface APIResponse3<TData = { status: number }> {
  data: TData;
  isError: boolean;
}

const g: APIResponse3 = {
  data: { status: 200 },
  isError: false,
};

const numberArray1: number[] = [1, 2, 3];
const numberArray2: Array<number> = [1, 2, 3]; // generic interface

const readonlyNumbers: readonly number[] = [1, 2, 3];
const readonlyNumbers2: ReadonlyArray<number> = [1, 2, 3];

type APIRequest<TRequest, TResponse> = {
  endpoint: string;
  requestData: TRequest;
  processResponse: (response: TResponse) => void;
};

type ProductRequest = {
  productId: number;
};

type ProductResponse = {
  productId: number;
  name: string;
  price: number;
  inStock: boolean;
};

type GetProductAPIRequest = APIRequest<ProductRequest, ProductResponse>;

type APIResponseData<T> = {
  data: T;
  isError: boolean;
};

// Promise is a generic interface
async function fetchData<T>(url: string): Promise<APIResponseData<T>> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchData<{ id: number; name: string }>('https://api.example/products/1').then(
  (data) => {
    console.log(data); // with data type
  }
);

fetch('https://api.example/products/1')
  .then((response) => response.json())
  .then((data) => console.log(data)); // no data type
