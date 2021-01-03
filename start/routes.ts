/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// user
Route.post('/users', 'UsersController.store')

// auth
Route.post('/auth', 'AuthorizationsController.login')

Route.group(() => {
  // spending
  Route.post('/speding', 'SpendingsController.store')

  // expenseType
  Route.post('/expenseType', 'ExpenseTypesController.store')

  // billing
  Route.post('/billing', 'BillingsController.store')

  // installment
  Route.post('/installment', 'InstallmentsController.balanceOfTheMonth')
}).middleware(['auth'])

Route.get('/', async () => {
  return { hello: 'world' }
})
