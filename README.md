# musician


* to run the code 

    <code>docker-compose build && docker-compose up</code>
* to import the data

    <code>docker-compose run db psql -U postgres postgres < db.sql</code>

* to run migrate command 

    <code>docker-compose run musicapp python manage.py makemigrations</code>

    <code>docker-compose run musicapp python manage.py migrate</code>
