-- Caregiver Table
CREATE TABLE Caregiver (
  CaregiverID INT AUTO_INCREMENT NOT NULL,
  Name VARCHAR(100) NOT NULL,
  Phone VARCHAR(15) NOT NULL,
  Address VARCHAR(255) NOT NULL,
  RelationshipToMember VARCHAR(50) NOT NULL,
  PRIMARY KEY (CaregiverID)
);

-- Partner Table
CREATE TABLE Partner (
  PartnerID INT AUTO_INCREMENT NOT NULL,
  Name VARCHAR(100) NOT NULL,
  ContactPerson VARCHAR(100) NOT NULL,
  Phone VARCHAR(15) NOT NULL,
  Email VARCHAR(100) NOT NULL,
  Address VARCHAR(255) NOT NULL,
  PRIMARY KEY (PartnerID)
);

-- Volunteer Table
CREATE TABLE Volunteer (
  VolunteerID INT AUTO_INCREMENT NOT NULL,
  Name VARCHAR(100) NOT NULL,
  Phone VARCHAR(15) NOT NULL,
  Availability ENUM('Full-Time', 'Part-Time', 'On-Call') NOT NULL,
  AssignedRegion VARCHAR(50) NOT NULL,
  PRIMARY KEY (VolunteerID)
);

-- Donor Table
CREATE TABLE Donor (
  DonorID INT AUTO_INCREMENT NOT NULL,
  Name VARCHAR(100) NOT NULL,
  Email VARCHAR(100) NOT NULL,
  DonationAmount DECIMAL(10, 2) NOT NULL,
  DonationDate DATE NOT NULL,
  PRIMARY KEY (DonorID)
);

-- Meal Table
CREATE TABLE Meal (
  MealID INT AUTO_INCREMENT NOT NULL,
  MealName VARCHAR(100) NOT NULL,
  Ingredients TEXT NOT NULL,
  Calories INT NOT NULL,
  PreparationTime INT NOT NULL,
  PartnerID INT NOT NULL,
  PRIMARY KEY (MealID),
  FOREIGN KEY (PartnerID) REFERENCES Partner(PartnerID)
);

-- Menu Table
CREATE TABLE Menu (
  MenuID INT AUTO_INCREMENT NOT NULL,
  WeekStartDate DATE NOT NULL,
  WeekEndDate DATE NOT NULL,
  NewAttribute VARCHAR(255),
  MealID INT NOT NULL,
  PRIMARY KEY (MenuID),
  FOREIGN KEY (MealID) REFERENCES Meal(MealID)
);

-- Member Table
CREATE TABLE Member (
  MemberID INT AUTO_INCREMENT NOT NULL,
  Name VARCHAR(100) NOT NULL,
  Age INT NOT NULL,
  Address VARCHAR(255) NOT NULL,
  Phone VARCHAR(15) NOT NULL,
  DietaryRequirements TEXT,
  RegistrationDate DATE NOT NULL,
  CaregiverID INT NOT NULL,
  PRIMARY KEY (MemberID),
  FOREIGN KEY (CaregiverID) REFERENCES Caregiver(CaregiverID)
);

-- Delivery Table
CREATE TABLE Delivery (
  DeliveryID INT AUTO_INCREMENT NOT NULL,
  DeliveryDate DATE NOT NULL,
  DeliveryStatus ENUM('Pending', 'Completed', 'Cancelled') NOT NULL,
  MemberID INT NOT NULL,
  VolunteerID INT NOT NULL,
  PRIMARY KEY (DeliveryID),
  FOREIGN KEY (MemberID) REFERENCES Member(MemberID),
  FOREIGN KEY (VolunteerID) REFERENCES Volunteer(VolunteerID)
);

-- Feedback Table
CREATE TABLE Feedback (
  FeedbackID INT AUTO_INCREMENT NOT NULL,
  FeedbackText TEXT NOT NULL,
  Rating INT CHECK (Rating BETWEEN 1 AND 5),
  FeedbackDate DATE NOT NULL,
  MemberID INT NOT NULL,
  PRIMARY KEY (FeedbackID),
  FOREIGN KEY (MemberID) REFERENCES Member(MemberID)
);
