/*Step 1*/
INSERT INTO public.account 
(account_firstname,account_lastname,account_email,account_password) 
VALUES ('Tony','Stark', 'tony@starkent.com','Iam1ronM@an');

/*Step 2*/
UPDATE public.account 
SET account_type = 'Admin'
WHERE account_firstname = 'Tony';

/*Step 3*/
DELETE FROM public.account WHERE account_firstname ='Tony';

/*Step 4*/
UPDATE public.inventory
SET inv_description = REPLACE(inv_description,'the small interiors','a huge interior')
WHERE inv_make= 'GM';

/*Step 5*/
SELECT * FROM public.inventory AS inv
INNER JOIN public.classification AS cla
ON inv.classification_id = cla.classification_id
WHERE cla.classification_name = 'Sport';

/*Step 6*/
UPDATE public.inventory
SET inv_image = REPLACE(inv_image,'/images','/images/vehicles'),
inv_thumbnail = REPLACE(inv_thumbnail,'/images','/images/vehicles');
