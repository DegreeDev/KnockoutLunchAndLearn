using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KnockoutLunchAndLearn.Models
{
    public class ComplicatedFormModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<CartItemModel> Items { get; set; }
    }
    public class CartItemModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double SimplePrice { get; set; }
        public int Quantity { get; set; }
    }
}