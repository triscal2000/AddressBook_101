using System;

namespace AddrewssBook.Models
{
    public interface ICreatePhonebook
    {
        Guid Id { get; set; }
        string Name { get; set; }
    }
}