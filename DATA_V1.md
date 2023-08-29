# Data sources and pipeline for major versions <= 1

1. The origin base data database Excel workbook [BASE data 27.7.2022 with new POP data.xlsx](./assets/data/BASE%20data%2027.7.2022%20with%20new%20POP%20data.xlsx) was prepared by Bernadette O'Hare, using data from the WDI and UNU WIDER datasets. Detailed notes on the data sources and preparation are contained in the _Intro and data sources_ sheet of the workbook.
2. The intermediate base data database Excel workbook [Base data 2022.xlsx](./assets/data/BASE%20data%202022.xlsx) was prepared by taking a copy of the origin base data database [BASE data 27.7.2022](./assets/data/BASE%20data%2027.7.2022%20with%20new%20POP%20data.xlsx), and calculating the following columns in the _2022 pop data_ sheet (those with red headings):

- INFANT SURVIVAL
- Number of infants surviving to 1yr
- Maternal survival per 100,000 live births
- Maternal survival rate %
- U5 survival rate (per 1000 live births)
- U5 survival %
- Number of children surviving to five
- School percent

3. The intermediate base data CSV file [Base data 2022.csv](./assets/data/BASE%20data%202022.csv) was generated from [Base data 2022.xlsx](./assets/data/BASE%20data%202022.xlsx) _2022 pop data_ sheet as follows:

- exporting the _2022 pop data_ sheet to .csv format;
- adding the column heading `countryyearcode` to the first column;
- replacing all instances of `#N/A` and `#VALUE!` with `NaN` using find and replace.

4. The final base data CSV file [Base data 2022 interpolated.csv](./assets/data/BASE%20data%202022%20interpolated.csv), which is used to drive the model, was generated from [Base data 2022.csv](./assets/data/BASE%20data%202022.csv) by using linear interpolation implemented [this notebook](https://observablehq.com/@stuwilmur/interpolate-grade-base-data-2022) to interpolate undefined (i.e. null or NaN) values for the following columns:

- School life expectancy, primary and secondary, both sexes (years);
- School percent;
- GRpcUNUWIDER 2022.

5. The origin education data sheet [simulation of long run education.xlsx](./assets/data/simulation%20of%20long%20run%20education.xlsx) was prepared by Stephen Hall. 

6. The intermediate education data sheet [School_data.xlsx](./assets/data/School_data.xlsx) was prepared by selecting the `countrycode`, `countryname`, `year`, `Out_school_prim`, `Out_school_prim` and `Out_school_upper` columns from the "primary" sheet in the previous workbook, and adding the computed "in-school" columns.

7. The education data CSV file was prepared from the previous workbook, by replacing all instances of `#N/A` with `NaN`.

8. The origin education population data sheet [unesco_school_population.xlsx](./assets/data/unesco_school_population.xlsx) was downloaded from [UNESCO Institute for Statistics](http://data.uis.unesco.org/index.aspx?queryid=3847#).

9. The intermediate education population data sheet [unesco_school_population_tidy.xlsx](./assets/data/unesco_school_population_tidy.xlsx) was prepare from the previous worksheet by the following process:

- deleting all null cell markers, being `..`;
- deleting all rows related to SDGs, rather than a country;
- adding dummy rows for Channel Islands and Kosovo, which do not appear in this dataset;
- adding a column `iso`;
- adding a column `countryyearcode`.

10. The education population data CSV file [unesco_school_population_tidy.csv](./assets/data/unesco_school_population_tidy.csv) was exported from the previous file, discounting the first two columns.

11. The Base data CSV, education data CSV and education population data CSV files were knitted together using [this notebook](https://observablehq.com/@stuwilmur/knit-grade-base-and-education-data), by matching on `countryyearcode`, to produce the file [All_data.csv](./assets/data/All_data.csv).

12. Finally, the CSV file is packaged as a string [in the source](./src/data/data.js).
