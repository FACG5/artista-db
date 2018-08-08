BEGIN;

DROP TABLE IF EXISTS painters, paintings CASCADE;


CREATE TABLE painters (
    painter_id SERIAL PRIMARY KEY,
    painter_name VARCHAR(100) NOT NULL,
    img VARCHAR
);

INSERT INTO painters (painter_name,img) VALUES
('Francisco de Goya' , 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg'),
('Salvador Dalí' , 'https://upload.wikimedia.org/wikipedia/commons/2/27/Salvador_Dali_NYWTS.jpg'),
('Pablo Picasso' , 'https://jamesclear.com/wp-content/uploads/2016/08/pablo-picasso-by-gilles-ehrmann-1952.jpg'),
('Yves Tanguy','yvespic'),
('Jean-Leon Gerome','https://upload.wikimedia.org/wikipedia/commons/2/2c/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_by_Nadar.jpg'),
('Ismail Shammout','https://www.marefa.org/images/9/95/Shamoot1.jpg'),
('Sami Mohammed','https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sami_Mohammad.jpg/600px-Sami_Mohammad.jpg');


 CREATE TABLE paintings (
    paint_id SERIAL PRIMARY KEY,
    paint_name VARCHAR(100),
    paint_description TEXT,
    img VARCHAR,
    painter_id INTEGER REFERENCES painters(painter_id)
);

INSERT INTO paintings (paint_name,paint_description,img,painter_id)
VALUES
('tomorrows dream', 'paint1 description','http://farm4.static.flickr.com/3193/2313008961_a647e3f510_o.jpg', 6 ),
('The Sleep of Reason Produces Monsters', 'paint2 description','http://farm3.static.flickr.com/2361/1648093126_0ae7a109a8_o.jpg', 1 ),
('The Dog','paint3 description', 'http://farm3.static.flickr.com/2594/3856455613_b47dca574c_o.jpg', 1 ),
('Geopoliticus Child Watching the Birth of the New Man','paint4 description','http://farm4.static.flickr.com/3139/2797190037_f343494def_o.jpg',2),
('The Persistence of Memory','paint5 description','http://farm2.static.flickr.com/1128/1417975685_7a51df8603_o.jpg',2),
('The Temptation of St. Anthony','paint6 description','http://farm3.staticflickr.com/2809/11835674215_1e26219af0_o.jpg',2),
('Paralysis and Resistance','paint7 description','http://farm3.static.flickr.com/2462/3801981210_f3b09d265c_o.jpg',7),
('A Caravan in the Dessert','paint8 description','https://c1.staticflickr.com/5/4404/36261952921_f02f505820_o.jpg',5),
('Indefinite Divisibility','paint9 description','https://c1.staticflickr.com/5/4605/25367449077_f478f9a7fd_o.jpg',4),
('Mama, Papa is Wounded!','paint10 description','https://upload.wikimedia.org/wikipedia/en/3/38/Mama%2C_Papa_is_Wounded%21.jpg',4),
('Guernica','paint11 description','https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg',3),
('Where to ..?','paint12 description','https://upload.wikimedia.org/wikipedia/en/3/31/Ismail_Shammout%27s_Where_to_....JPG',6);

COMMIT;