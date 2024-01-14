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