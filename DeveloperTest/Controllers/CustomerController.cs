using DeveloperTest.Business.Interfaces;
using DeveloperTest.Models;
using Microsoft.AspNetCore.Mvc;

namespace DeveloperTest.Controllers
{
    [ApiController, Route("customer")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        private static readonly string[] CustomerTypes = { "Large", "Small" };
        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet("all")]
        public IActionResult Get()
        {
            return Ok(_customerService.GetCustomers());
        }

        [HttpGet("types")]
        public IActionResult GetCustomerTypes()
        {
            return Ok(CustomerTypes);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            if (id < 1)
            {
                return BadRequest("Invalid Input for customer Id");
            }

            var customer = _customerService.GetCustomer(id);

            if (customer == null)
            {
                return NotFound("Customer data not found");
            }

            return Ok(customer);

        }

        [HttpPost]
        public IActionResult Create(BaseCustomerModel model)
        {
            if (string.IsNullOrWhiteSpace(model.CustomerName))
            {
                return BadRequest("Invalid Input for customer name");
            }

            if(string.IsNullOrWhiteSpace(model.CustomerType))
            {
                return BadRequest("Invalid Input for customer type");
            }

            var customer = _customerService.CreateCustomer(model);

            return Created($"customer/{customer.CustomerId}", customer);
        }
    }
}
