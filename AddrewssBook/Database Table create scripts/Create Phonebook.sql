USE [AddressBook]
GO

ALTER TABLE [dbo].[phonebook] DROP CONSTRAINT [DF__phonebook__Id__24927208]
GO

/****** Object:  Table [dbo].[phonebook]    Script Date: 2021/01/15 9:46:36 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[phonebook]') AND type in (N'U'))
DROP TABLE [dbo].[phonebook]
GO

/****** Object:  Table [dbo].[phonebook]    Script Date: 2021/01/15 9:46:36 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[phonebook](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_contacts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[phonebook] ADD  DEFAULT (newid()) FOR [Id]
GO


