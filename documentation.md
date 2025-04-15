Starting Out

- Get familiar with the code and structure to see how everything has been set up.
- Understand the files and how they are working together if at all.
- Review the README instructions one more time to get an idea of how to start out.

Steps

- Database

  - My thought it to start out with the databse and make sure I have the tables along with their necessary fields set up and be able to use.
  - Connect to the database using table plus to view the data and make sure structure corresponds with how I want it.
  - I have not used sqlite in a while so have to remember how the tables are built and how to specify the relationships between tables. Here I used ChatGPT for some assistance on the formatting to make this happend. (Setting the Foreign keys)
  - Now that I have a table, I will work with the endpoints, and test them out to make sure I am getting

  API Handlers

  - I am updating the app.gets to be app.all so I can handle all api methods in a separated files. This will be a separate file for each table if needed. This will also make things a bit cleaner and easier to read.
  - adding api folders for each table and for each method
  - Now that I have set the api handler files, I will start testing the endpoints using insomnia.I will also add data to the database for later use when updating the front end. This will give me data to work with as I display and tyle the UI/UX.
  - I have working endpoints to create and get organizations, accounts, and deals. I will now switch to the front end

FrontEnd

- I started out by setting up the page header and the body. I decided to create two components. A header component and a Card component where the data would be display.
- I had some slight trouble with remembering the css styling. I have been using tailwind lately and not much styling through .css files. So took me a sec but it came back to me as I went on.
- As I started putting together the card it made me rethink my backend api files. I had initially created and endpoint for each table. But as I built out the front and and referenced the instructions again, I felt it was better to grab all the data through the organizations endpoint, which would also grab the accounts and deals associated with each organization.That way it would be easier when filtering.
- Due being short on time, I decided to make the sum calculations for the net value and probability value on the front end. If I had more time I would have done this through the backend as part of the database query. I also would have created a set of statuses to make it clear what status are available when creating but also when doing calculations. For now, I assumed an "open" status and a "closed" status. Open being not a completed deal, and "closed" deal. I would have likely added additional status given more information on the process of how deals are done from start to finish.
- With Typescript, I made sure to add types to use as data was being passed throughout components.
- I did not have time to add the year filter. But if I added this I would have done it by getting the unique years from the list of deals. I would have assumed started deals. Had I gone deep into this, I would have added ways to filter by specified years such as by started_at or ended_at deals, maybe even created at assuming created at dates and started at dates were not the same.
- I used fetch to hit my backend.
- I used try/catch in the backend and console.error/console.log to help with debuggin as I hit endpoints and make sure I retrieve data correctly. I also used the javascript debug terminal for step by step debugging.
- there is definitely multiple ways to optimize this and clean up the file structure as well if I had more time and gone further into organization.

LLM (ChatGPT)

- I did use some help from ChatGPT, mainly as I got familiar with the css styling agai.
- as well as the rawdata querying. Even though I have used raw data querying in the passed, it was not through code, so I had to familiarize myself with the syntax. (In the past I have used Prisma ORM with PostgreSQL). I took some time to try to implement that in this project. But later realized, you would probably want to see me working with the raw data querying so I reverted back to doing that.
