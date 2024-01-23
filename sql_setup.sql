DROP TABLE IF EXISTS randomDataSet;

CREATE TABLE randomDataSet (
  id SERIAL PRIMARY KEY,
  name varchar(255) default NULL,
  phone varchar(100) default NULL,
  email varchar(255) default NULL,
  address varchar(255) default NULL,
  postalZip varchar(10) default NULL,
  text TEXT default NULL,
  time varchar(255),
  date varchar(255),
  city varchar(255),
  text1 TEXT default NULL,
  latlng varchar(255) default NULL,
  url varchar(255),
  currency varchar(100) default NULL,
  PRIMARY KEY (id)
) 

INSERT INTO randomDataSet (name,phone,email,address,postalZip,text,time,date,city,text1,latlng,url,currency)
VALUES
  ('Keely Kelly','1-415-882-7828','arcu.morbi@aol.org','P.O. Box 529, 7199 Mollis Ave','313569','turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis','10:53 AM','Apr 21, 2024','Garzón','Lorem ipsum dolor sit amet,','-36.3017542656, 121.7659385856','https://naver.com/en-us?str=se','$57.30'),
  ('Stephanie Petty','1-872-855-9541','vitae.mauris@icloud.net','Ap #288-7666 Placerat, Road','38511','est ac facilisis facilisis, magna tellus faucibus leo, in lobortis','10:40 PM','Sep 27, 2023','Bydgoszcz','Lorem ipsum dolor sit amet, consectetuer adipiscing elit.','-4.7341871104, 89.0290860032','http://naver.com/group/9?ab=441&aad=2','$62.75'),
  ('Abraham Webster','1-750-520-8835','urna.vivamus@yahoo.com','Ap #725-8496 Lacus. Ave','928283','et nunc. Quisque ornare tortor at risus. Nunc ac sem','8:56 AM','Apr 7, 2023','Umlazi','Lorem ipsum','52.0294489088, 67.0777493504','http://reddit.com/user/110?ad=115','$52.29'),
  ('Leah Guerra','1-425-676-9324','dictum.mi@hotmail.org','Ap #933-6942 Mattis Rd.','635238','mollis lectus pede et risus. Quisque libero lacus, varius et,','12:43 PM','Aug 30, 2024','El Retorno','Lorem ipsum dolor','-54.1085815808, 136.7358608384','http://yahoo.com/sub?ad=115','$31.57'),
  ('Isabelle Harper','1-856-261-1364','in.nec@icloud.net','Ap #687-6498 Lorem Rd.','2062','auctor, nunc nulla vulputate dui, nec tempus mauris erat eget','1:01 PM','Apr 25, 2024','Lublin','Lorem ipsum dolor sit','88.0924384256, 53.3540608','http://netflix.com/sub?q=test','$83.92');





DROP TABLE IF EXISTS TheMockedDataTEam;

CREATE TABLE TheMockedDataTEam (
  id SERIAL PRIMARY KEY,
  name varchar(255) default NULL,
  email varchar(255) default NULL,
  age number default NULL,
  phone varchar(100) default NULL,
  access varchar(255)
) 


DROP TABLE IF EXISTS TheMockedDataTEam;
CREATE TABLE TheMockedDataTEam (
  id SERIAL PRIMARY KEY,
  name varchar(255) default NULL,
  email varchar(255) default NULL,
  age  integer,
  phone varchar(100) default NULL,
  access TEXT default NULL
)



INSERT INTO TheMockedDataTEam (name,email,age,phone,access)
VALUES
  ('Chloe Ferrell','et.magna@icloud.com',98,'(03482) 1888279','admin'),
  ('Deanna Hensley','mauris.sapien.cursus@aol.net',7,'(0643) 71585343','user'),
  ('Kim Kent','lorem.eget@hotmail.edu',66,'(031) 43687825','manager'),
  ('Alden Copeland','ac.turpis@hotmail.couk',55,'(0322) 14846384','manager'),
  ('Griffith Pennington','non.magna.nam@icloud.org',23,'(034468) 661250','user'),
  ('Orla Rodriquez','tellus.suspendisse@protonmail.couk',33,'(05758) 8633943','admin'),
  ('Christian Hurst','mollis.vitae.posuere@yahoo.net',19,'(04156) 8337344','manager'),
  ('Haviva Fischer','turpis.nulla@yahoo.com',37,'(03930) 0147457','manager'),
  ('Joelle Le','rutrum.non.hendrerit@aol.ca',37,'(037276) 208722','admin'),
  ('Gil Kaufman','a.aliquet@icloud.ca',39,'(051) 77973116','manager'),
  ('Eric Leon','mollis.phasellus.libero@hotmail.edu',86,'(0652) 61330797','manager'),
  ('Wyoming Osborn','bibendum.sed@hotmail.ca',33,'(0736) 97545147','user'),
  ('Nolan Henry','vitae@icloud.ca',37,'(06778) 8189649','user'),
  ('Moses Talley','lacinia.orci@protonmail.com',65,'(036) 77944077','manager'),
  ('Blake Armstrong','lectus.quis.massa@hotmail.couk',59,'(033) 61543174','manager'),
  ('Francesca Holden','orci@protonmail.org',32,'(0368) 72311857','manager'),
  ('Hu Booker','sed@hotmail.com',16,'(0894) 18632474','user'),
  ('Audrey Winters','ligula@icloud.edu',94,'(0841) 36713422','admin'),
  ('Sawyer Mercer','a.tortor@yahoo.couk',25,'(09359) 3273173','manager'),
  ('Harding Cummings','orci.adipiscing.non@hotmail.com',6,'(06625) 9544165','manager')



  CREATE TABLE TheMockedDataContacts (
  id SERIAL PRIMARY KEY,
  name varchar(255) default NULL,
  email varchar(255) default NULL,
  age  integer,
  phone varchar(100) default NULL,
  address varchar(100) default NULL,
  city varchar(100) default NULL,
  zipCode varchar(100) default NULL,
)

  INSERT INTO TheMockedDataContacts (name,email,age,phone,address,city,zipCode)
VALUES
   ('Jason Brock','felis.nulla.tempor@google.edu',7,'(037214) 591178','1892 Mauris St.','Canberra','13736'),
  ('Shaeleigh Trevino','ipsum.nunc.id@hotmail.com',42,'(01808) 8679766','P.O. Box 168, 8926 Enim. Street','North-Eastern Islands','1214 XK'),
  ('Britanni Kinney','lorem.lorem@protonmail.org',62,'(08555) 6334836','554-6138 Nunc Avenue','Uitenhage','2763'),
  ('Jack Conrad','nunc@yahoo.net',8,'(039477) 120264','P.O. Box 428, 6866 Enim St.','Pekanbaru','46316'),
  ('Larissa Richardson','donec@icloud.org',61,'(08784) 8656721','738-772 Placerat, Road','Hainan','YN57 5PY');


CREATE TABLE mockBarData (
    country VARCHAR(2),
    hotdog INTEGER,
    hot_dog_color VARCHAR(200),
    burger INTEGER,
    burgerColor VARCHAR(200),
    kebab INTEGER,
    kebabColor VARCHAR(200),
    donut INTEGER,
    donutColor VARCHAR(200)
);

INSERT INTO mockBarData (country,hot_dog,hot_dog_color,burger,burger_color,kebab,kebab_color,donut,donut_color)
VALUES
   ('AM',19,'hsl(229, 70%, 50%)',109,'hsl(296, 70%, 50%)',1,'hsl(97, 70%, 50%)',12,'hsl(340, 70%, 50%)'),
  ('AL',149,'hsl(307, 70%, 50%)',81,'hsl(307, 70%, 50%)',13,'hsl(273, 70%, 50%)',42,'hsl(275, 70%, 50%)'),
  ('AI',49,'hsl(72, 70%, 50%)',81,'hsl(96, 70%, 50%)',3,'hsl(106, 70%, 50%)',107,'hsl(256, 70%, 50%)'),
  ('AG',33,'hsl(257, 70%, 50%)',149,'hsl(326, 70%, 50%)',38,'hsl(110, 70%, 50%)',56,'hsl(9, 70%, 50%)'),
  ('AF',28,'hsl(190, 70%, 50%)',109,'hsl(325, 70%, 50%)',80,'hsl(54, 70%, 50%)',139,'hsl(285, 70%, 50%)'),
   ('AE',28,'hsl(208, 70%, 50%)',109,'hsl(334, 70%, 50%)',80,'hsl(182, 70%, 50%)',139,'hsl(76, 70%, 50%)'),
    ('AD',28,'hsl(87, 70%, 50%)',109,'hsl(141, 70%, 50%)',80,'hsl(224, 70%, 50%)',139,'hsl(274, 70%, 50%)');