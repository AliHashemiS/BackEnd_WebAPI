DROP table IF EXISTS public.user CASCADE;
CREATE TABLE public.user(
    id          serial primary key,
    email       VARCHAR(100) not null,
    password    varchar(1024) not null,
    created_at  timestamp  DEFAULT CURRENT_TIMESTAMP,
    updated_at  timestamp  DEFAULT CURRENT_TIMESTAMP
);


DROP table IF EXISTS public.category CASCADE;
CREATE TABLE public.category(
    id          	serial primary key,
    category_name	VARCHAR(50) NOT NULL
);


DROP table IF EXISTS public.method CASCADE;
CREATE TABLE public.method(
    id          serial primary key,
    id_user     int NOT NULL,
	id_category int NOT NULL,
    name        VARCHAR(250) NOT NULL,
    description VARCHAR(500) NOT NULL,
	code	 	VARCHAR(1000) NOT NULL,
    CONSTRAINT user_id FOREIGN KEY (id_user) REFERENCES public.user (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
	CONSTRAINT category_id FOREIGN KEY (id_category) REFERENCES public.category (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
);