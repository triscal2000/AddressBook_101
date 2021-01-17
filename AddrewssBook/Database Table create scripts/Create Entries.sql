USE [AddressBook]
GO

ALTER TABLE [dbo].[entries] DROP CONSTRAINT [FK_entries_phonebook]
GO

ALTER TABLE [dbo].[entries] DROP CONSTRAINT [DF__entries__Id__286302EC]
GO

/****** Object:  Table [dbo].[entries]    Script Date: 2021/01/15 9:46:47 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[entries]') AND type in (N'U'))
DROP TABLE [dbo].[entries]
GO

/****** Object:  Table [dbo].[entries]    Script Date: 2021/01/15 9:46:47 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[entries](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](50) NULL,
	[PhoneNumber] [nvarchar](50) NULL,
	[PhonebookId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_entries] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[entries] ADD  DEFAULT (newid()) FOR [Id]
GO

ALTER TABLE [dbo].[entries]  WITH CHECK ADD  CONSTRAINT [FK_entries_phonebook] FOREIGN KEY([PhonebookId])
REFERENCES [dbo].[phonebook] ([Id])
GO

ALTER TABLE [dbo].[entries] CHECK CONSTRAINT [FK_entries_phonebook]
GO


