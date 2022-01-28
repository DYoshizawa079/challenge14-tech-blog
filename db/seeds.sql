USE challenge14_blog;
INSERT INTO post (id, author, title, content)
VALUES
    (1, 1, 'Title1', 'Hello world!'),
    (2, 1, 'Title2', 'Sample text for post 2'),
    (3, 2, 'Title3', 'Lorem ipsum solor');

INSERT INTO user (id, username, password)
VALUES
    (1, 'daniel', 'password123'),
    (2, 'zawa', 'password456');