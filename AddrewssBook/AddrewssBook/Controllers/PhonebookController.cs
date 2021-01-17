using AddrewssBook.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace AddrewssBook.Controllers
{
    public class PhonebookController : ApiController
    {
        [HttpPost]
        public object Create([FromBody] CreatePhonebook contact)
        {
            if (contact.Id != null || contact.Id == Guid.Empty)
            {
                var ct = new phonebook();
                ct.Name = contact.Name;
                ct.Id = Guid.NewGuid();

                using (var dbCtx = new AddressBookEntities())
                {
                    dbCtx.phonebooks.Add(ct);
                    dbCtx.SaveChanges();
                }

                return new Response
                {
                    Status = "Success",
                    Message = "Record SuccessFully Added."
                };

            }
            else
            {
                using (var dbCtx = new AddressBookEntities())
                {
                    var pb = (from s in dbCtx.phonebooks
                              where s.Id == contact.Id
                              select s).FirstOrDefault();
                    pb.Name = contact.Name;

                    dbCtx.SaveChanges();
                }

                return new Response
                {
                    Status = "Success",
                    Message = "Record SuccessFully Updated."
                };
            }
        }

        public object Get()
        {
            using (var dbCtx = new AddressBookEntities())
            {
                var results = dbCtx.phonebooks.ToList();

                var ret = results.Select(x =>
                {
                    return new ContactResult
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Entries = x.entries.Select(y =>
                        new EntriesResult
                        {
                            Name = y.Name,
                            Id = y.Id,
                            PhonebookId = y.PhonebookId,
                            PhoneNumber = y.PhoneNumber
                        }).ToList()
                    };
                });

                return ret.ToList();
            }
        }

        [HttpPost]
        public object Search([FromBody] GetContactsSearch query)
        {
            using (var dbCtx = new AddressBookEntities())
            {
                var pb = (from s in dbCtx.phonebooks
                          where s.Name.Contains(query.Seatch)
                          select s).ToList();

                var ret = pb.Select(x =>
                {
                    return new ContactResult
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Entries = x.entries.Select(y =>
                        new EntriesResult
                        {
                            Name = y.Name,
                            Id = y.Id,
                            PhonebookId = y.PhonebookId,
                            PhoneNumber = y.PhoneNumber
                        }).ToList()
                    };
                });

                return ret.ToList();
            }
        }
    }
}