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
('THE DREAM OF TOMORROW', 'Oil painting, 2000, 160X200 cm. by Ismail Shammout, Dreams are that (a) welcoming, vast, limitless space … Dreams can not be denied.
Would a life without (devoid) dreams have meaning?
We dream the impossible, yet continue to dream. We know our sacred homeland like a sacred right.
A homeland in its entirety for all its people.

Detailed Story:
Dreams forever have a limitless space …
None can prevent a dream ..
They said “I think .. therefore I am ..”
I say “I exist .. therefore .. I dream ..’
Can life carry meaning if bereft of dreams?
And the dream is free just as freedom ..
We know our dream ..
We know it .. and yet we still dream it ..
We know it a sacred homeland .. like a sacred right …
We know it in the depth of poetry, music and color, but it is more wonderful with its land & people. All of its people, all of its land.','http://farm4.static.flickr.com/3193/2313008961_a647e3f510_o.jpg', 6 ),
('The Sleep of Reason Produces Monsters', 'is an etching by the Spanish painter and printmaker Francisco Goya. Created between 1797 and 1799, it is the 43rd of 80 etchings making up the suite of satires Los Caprichos Goya imagines himself asleep amidst his drawing tools, his reason dulled by slumber and bedeviled by creatures that prowl in the dark. The work includes owls that may be symbols of folly and bats symbolizing ignorance. The artists nightmare reflected his view of Spanish society, which he portrayed in the Caprichos as demented, corrupt, and ripe for ridicule. The work is held at the Metropolitan Museum of Art in New York and was the gift of M. Knoedler & Co. in 1918.','http://farm3.static.flickr.com/2361/1648093126_0ae7a109a8_o.jpg', 1 ),
('The Dog','The Dog is the name usually given to a painting by Spanish artist Francisco Goya, now in the Museo del Prado, Madrid. It shows the head of a small dog gazing upwards. The dog itself is almost lost in the vastness of the rest of the image, which is empty except for a dark sloping area near the bottom of the picture: an unidentifiable mass which conceals the animals body.', 'http://farm3.static.flickr.com/2594/3856455613_b47dca574c_o.jpg', 1 ),
('Geopoliticus Child Watching the Birth of the New Man','first shown at Dalis solo exhibition at M. Knoedler & Co., New York, in 1943, records Dalis shifting perception of the war then in progress in Europe. The wars devastation and its psychological impact on Dali can already be felt in some of his more somber canvases before his period in America. In this painting, however, his style shows a new, more philosophical classicism.','http://farm4.static.flickr.com/3139/2797190037_f343494def_o.jpg',2),
('The Persistence of Memory','is a 1931 painting by artist Salvador Dalí, and is one of his most recognizable works. First shown at the Julien Levy Gallery in 1932, since 1934 the painting has been in the collection of the Museum of Modern Art (MoMA) in New York City, which received it from an anonymous donor. It is widely recognized and frequently referenced in popular culture, and sometimes referred to by more descriptive (though incorrect) titles, such as "Melting Clocks", "The Soft Watches" or "The Melting Watches','http://farm2.static.flickr.com/1128/1417975685_7a51df8603_o.jpg',2),
('The Temptation of St. Anthony','is a painting by Spanish surrealist artist Salvador Dalí. Painted in 1946, it is a precursor to the body of Dalís work commonly known as the "classical period" or the "Dalí Renaissance','http://farm3.staticflickr.com/2809/11835674215_1e26219af0_o.jpg',2),
('Paralysis and Resistance','The subject of most of Mohammads work has been human and Arab revolution. In the beginning of his career, he was involved in making life-size sculptures. Some of the important ones included Ibn Rushd (1964) and Al-Khalil Bin Ahmad (1965). Mohammad often made sculptures that were related to the crisis of the time. In 1983, he made Sabra and Shatila, expressing the pain of Sabra and Shatila massacre and before that he made sculptures relating to the Crisis in the Cairo in 1970','http://farm3.static.flickr.com/2462/3801981210_f3b09d265c_o.jpg',7),
('A Caravan in the Dessert','paint8 description','https://c1.staticflickr.com/5/4404/36261952921_f02f505820_o.jpg',5),
('Indefinite Divisibility','paint9 description','https://c1.staticflickr.com/5/4605/25367449077_f478f9a7fd_o.jpg',4),
('Mama, Papa is Wounded!','paint10 description','https://upload.wikimedia.org/wikipedia/en/3/38/Mama%2C_Papa_is_Wounded%21.jpg',4),
('Guernica','paint11 description','https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg',3),
('Where to ..?','paint12 description','https://upload.wikimedia.org/wikipedia/en/3/31/Ismail_Shammout%27s_Where_to_....JPG',6);

COMMIT;