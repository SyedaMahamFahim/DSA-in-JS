# Hashmap Using Object

### 1. Creating a Hashmap

You can create an empty hashmap in JavaScript by simply declaring an empty object `{}`.

```javascript
const hashmap = {};
```

### 2. Adding or Updating Values

To add or update values in the hashmap, you can directly assign values to keys as properties of the object.

```javascript
// Adding values
hashmap['key1'] = 'value1';
hashmap['key2'] = 'value2';

// Updating value for an existing key
hashmap['key2'] = 'new value2';
```

### 3. Getting Values

You can retrieve values from the hashmap by accessing the corresponding keys.

```javascript
const valueForKey1 = hashmap['key1']; // Retrieves 'value1'
const valueForKey2 = hashmap['key2']; // Retrieves 'new value2'
```

### 4. Deleting Values

To delete a key-value pair from the hashmap, you can use the `delete` operator.

```javascript
delete hashmap['key1']; // Deletes the key-value pair for 'key1'
```

### 5. Complete Operations


Here's a complete example demonstrating these operations:

```javascript
// Create hashmap
const hashmap = {};

// Adding values
hashmap['key1'] = 'value1';
hashmap['key2'] = 'value2';

// Getting values
const valueForKey1 = hashmap['key1']; // Retrieves 'value1'
const valueForKey2 = hashmap['key2']; // Retrieves 'value2'

// Updating value
hashmap['key2'] = 'new value2'; // Updates value for 'key2'

// Deleting a key-value pair
delete hashmap['key1']; // Deletes the key-value pair for 'key1'
```

### 6. In Loop
```javascript
// Create hashmap
const hashmap = {};

// Adding values
hashmap['key1'] = 'value1';
hashmap['key2'] = 'value2';

// Loop through the hashmap
for (const key in hashmap) {
    // Get the value for each key
    const value = hashmap[key];
    console.log(`Key: ${key}, Value: ${value}`);
}

// Updating value in loop
for (const key in hashmap) {
    // Update value for a specific key
    if (key === 'key2') {
        hashmap[key] = 'new value2';
    }
}

// Deleting a key-value pair
delete hashmap['key1']; // Deletes the key-value pair for 'key1'

// Loop through the hashmap after update and deletion
for (const key in hashmap) {
    // Get the updated value for each key
    const value = hashmap[key];
    console.log(`Key: ${key}, Value: ${value}`);
}
```



### Note
Remember that with objects in JavaScript, keys are always strings (or converted to strings). So even if you use non-string keys, they will be converted to strings internally. This can sometimes lead to unexpected behavior, especially when using non-primitive data types as keys.

# Hashmap Using Map()


### 1. Creating a Hashmap using Map

```javascript
// Creating a Hashmap using Map
const hashmap = new Map();
```

### 2. Adding or Updating Values

```javascript
// Adding or Updating Values
hashmap.set('key1', 'value1');
hashmap.set('key2', 'value2');
```

### 3. Getting Values

```javascript
// Getting Values
const valueForKey1 = hashmap.get('key1'); // Retrieves 'value1'
const valueForKey2 = hashmap.get('key2'); // Retrieves 'value2'
```

### 4. Deleting Values

```javascript
// Deleting Values
hashmap.delete('key1'); // Deletes the key-value pair for 'key1'
```

### 5. Complete Operations

#### Loop through the hashmap

```javascript
// Loop through the hashmap
for (const [key, value] of hashmap) {
    console.log(`Key: ${key}, Value: ${value}`);
}
```

#### Updating value in loop

```javascript
// Updating value in loop
for (const [key, value] of hashmap) {
    // Update value for a specific key
    if (key === 'key2') {
        hashmap.set(key, 'new value2');
    }
}
```

#### Loop through the hashmap after update and deletion

```javascript
// Loop through the hashmap after update and deletion
for (const [key, value] of hashmap) {
    console.log(`Key: ${key}, Value: ${value}`);
}
```

### Note

Remember that with `Map` in JavaScript, keys can be any type of value, not just strings like with plain objects. This allows for more flexibility in key-value pairs.