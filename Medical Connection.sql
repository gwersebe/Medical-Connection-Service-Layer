CREATE DATABASE medicalConnection;


CREATE TABLE `doctors` (
  `doctorID` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `specialization` varchar(255),
  `location` varchar(255)
);

CREATE TABLE `patients` (
  `patientID` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `age` int,
  `gender` varchar(255),
  `address` varchar(255)
);

CREATE TABLE `appointments` (
  `appointmentID` int PRIMARY KEY AUTO_INCREMENT,
  `doctorID` int,
  `patientID` int,
  `date` datetime
);

CREATE TABLE `medical_records` (
  `recordID` int PRIMARY KEY AUTO_INCREMENT,
  `patientID` int,
  `doctorID` int,
  `appointmentID` int,
  `diagnosis` varchar(255),
  `prescription` text,
  `notes` text
);

CREATE TABLE `symptoms` (
  `symptomID` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `description` text
);

CREATE TABLE `doctors_symptoms` (
  `doctorID` int,
  `symptomID` int,
  PRIMARY KEY (doctorID, symptomID)
);


ALTER TABLE `appointments` ADD FOREIGN KEY (`doctorID`) REFERENCES `doctors` (`doctorID`);

ALTER TABLE `appointments` ADD FOREIGN KEY (`patientID`) REFERENCES `patients` (`patientID`);

ALTER TABLE `medical_records` ADD FOREIGN KEY (`patientID`) REFERENCES `patients` (`patientID`);

ALTER TABLE `medical_records` ADD FOREIGN KEY (`doctorID`) REFERENCES `doctors` (`doctorID`);

ALTER TABLE `medical_records` ADD FOREIGN KEY (`appointmentID`) REFERENCES `appointments` (`appointmentID`);

ALTER TABLE `doctors_symptoms` ADD FOREIGN KEY (`doctorID`) REFERENCES `doctors` (`doctorID`);

ALTER TABLE `doctors_symptoms` ADD FOREIGN KEY (`symptomID`) REFERENCES `symptoms` (`symptomID`);
