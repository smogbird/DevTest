using DeveloperTest.Business.Interfaces;
using DeveloperTest.Database;
using DeveloperTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeveloperTest.Business
{
    public class CustomerService : ICustomerService
    {
        private readonly ApplicationDbContext context;

        public CustomerService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public CustomerModel GetCustomer(int customerId)
        {
            return context.Customers.SingleOrDefault(x => x.CustomerId.Equals(customerId)).Map();
        }

        public CustomerModel[] GetCustomers()
        {
            return context.Customers.ToArray().Map();
        }

        public CustomerModel CreateCustomer(BaseCustomerModel baseCustomerModel)
        {
            var newCustomer = context.Customers.Add(new Database.Models.Customer() 
                        { 
                            Name = baseCustomerModel.CustomerName, 
                            CustomerType = baseCustomerModel.CustomerType 
                        });
            context.SaveChanges();

            return newCustomer.Entity.Map();
        }
    }
}
