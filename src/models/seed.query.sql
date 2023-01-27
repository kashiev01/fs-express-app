DROP DATABASE IF EXISTS postgres;
CREATE DATABASE postgres;
\c data;
DROP TABLE IF EXISTS data;
CREATE TABLE data
(
    id               serial
        constraint "PK_36b46d232307066b3a2c9ea3a1d"
            primary key,
    "createDateTime" timestamp with time zone default now() not null,
    name             varchar                unique          not null,
    mimetype         varchar                                not null,
    size             integer                                not null
);

ALTER TABLE data
    owner to postgres;
