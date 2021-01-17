using System;

namespace AddrewssBook.Models
{
    public class CreatePhonebook : ICreatePhonebook
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}