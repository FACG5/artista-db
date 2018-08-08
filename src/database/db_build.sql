
BEGIN;

DROP TABLE IF EXISTS categories, painters, paintings CASCADE;

CREATE TABLE categories (
    cat_id SERIAL PRIMARY KEY,
    cat_name VARCHAR(100) NOT NULL ,
    cat_description TEXT 
);

INSERT INTO categories (cat_name, cat_description) VALUES 
('cat1',' cat desception'),
('cat2',' cat desception'),
('cat3',' cat desception');

CREATE TABLE painters (
    painter_id SERIAL PRIMARY KEY,
    painter_name VARCHAR(100) NOT NULL,
    img VARCHAR ,
    cat_id INTEGER REFERENCES categories(cat_id)
);

INSERT INTO painters (painter_name,img,cat_id) VALUES 
('asala' , 'https://i.kinja-img.com/gawker-media/image/upload/s--hdxwm64C--/c_scale,f_auto,fl_progressive,q_80,w_800/y9paiv3abzlghomday9l.jpg' , 1),
('salwa' , 'https://i.kinja-img.com/gawker-media/image/upload/s--hdxwm64C--/c_scale,f_auto,fl_progressive,q_80,w_800/y9paiv3abzlghomday9l.jpg' , 2),
('othman' , 'https://i.kinja-img.com/gawker-media/image/upload/s--hdxwm64C--/c_scale,f_auto,fl_progressive,q_80,w_800/y9paiv3abzlghomday9l.jpg' , 3);


 CREATE TABLE paintings (
    paint_id SERIAL PRIMARY KEY,
    paint_name VARCHAR(100),
    paint_description TEXT,
    img VARCHAR, 
    cat_id INTEGER REFERENCES categories(cat_id),
    painter_id INTEGER REFERENCES painters(painter_id)

);

INSERT INTO paintings (paint_name,paint_description,img,cat_id,painter_id)
VALUES 
('paint1', 'paint description','https://i.kinja-img.com/gawker-media/image/upload/s--hdxwm64C--/c_scale,f_auto,fl_progressive,q_80,w_800/y9paiv3abzlghomday9l.jpg' , 1 , 1 ),
('paint2', 'paint description','https://i.kinja-img.com/gawker-media/image/upload/s--hdxwm64C--/c_scale,f_auto,fl_progressive,q_80,w_800/y9paiv3abzlghomday9l.jpg' , 2 , 2 ),
('paint3', 'paint description','https://i.kinja-img.com/gawker-media/image/upload/s--hdxwm64C--/c_scale,f_auto,fl_progressive,q_80,w_800/y9paiv3abzlghomday9l.jpg' , 3 , 3 );


COMMIT;