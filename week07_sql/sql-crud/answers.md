# SQL CRUD Solutions

## CREATE users table

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

## Seed users table

```sql
INSERT INTO users (name, email, password) VALUES ('Aang Air', 'aang@air.com', 'aangpass');

INSERT INTO users (name, email, password) VALUES ('Katara Water', 'katara@water.com', 'katarapass');

INSERT INTO users (name, email, password) VALUES ('Zuko Fire', 'zuko@fire.com', 'zukopass');
```

## CREATE posts table

```sql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    author INT,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(5100) NOT NULL,
    cover VARCHAR(510) NOT NULL,
    date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (author) REFERENCES users(id)
);
```

## POST `/posts`

```sql
INSERT INTO posts (author, title, content, cover)
VALUES (1, 'How to Write an SQL Query',
        'This is how you write an SQL Query',
        'https://optim.tildacdn.one/tild6238-3035-4335-a333-306335373139/-/resize/824x/-/format/webp/IMG_3349.jpg')
RETURNING *;
```

## GET `/posts`

```sql
SELECT * FROM posts;
```

## GET `posts/:id`

```sql
SELECT * FROM posts
JOIN users
ON posts.author = users.id
WHERE posts.id = 3;
```

## PUT `posts/:id`

```sql
UPDATE posts
SET title = 'How to Mess Up an SQL Query',
    content = 'Here we go! Time to mess things up!',
    cover = 'https://optim.tildacdn.one/tild6238-3035-4335-a333-306335373139/-/resize/824x/-/format/webp/IMG_3349.jpg'
WHERE id = 3
RETURNING *;
```

## DELETE `posts/:id`

```sql
DELETE FROM posts
WHERE id = 5
```
