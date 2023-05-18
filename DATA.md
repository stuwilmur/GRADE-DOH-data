# Data sources and pipeline

1. The origin base data database Excel workbook [BASE data 27.7.2022.xlsx](https://github.com/stuwilmur/GRADE-DOH-data/blob/main/assets/data/BASE%20data%2027.7.2022%20with%20new%20POP%20data.xlsx) was prepared by Bernadette O'Hare, using data from the WDI and UNU WIDER datasets. Detailed notes on the data sources and preparation are contained in the _Intro and data sources_ sheet of the workbook.
2. The intermediate base data database Excel workbook [Base data 2022.xlsx](https://github.com/stuwilmur/GRADE-DOH-data/blob/main/assets/data/BASE%20data%202022.xlsx) was prepared by taking a copy of the origin base data database [BASE data 27.7.2022](https://github.com/stuwilmur/GRADE-DOH-data/blob/main/assets/data/BASE%20data%2027.7.2022%20with%20new%20POP%20data.xlsx), and calculating the following columns in the _2022 pop data_ sheet (those with red headings):

- INFANT SURVIVAL
- Number of infants surviving to 1yr
- Maternal survival per 100,000 live births
- Maternal survival rate %
- U5 survival rate (per 1000 live births)
- U5 survival %
- Number of children surviving to five
- School percent

3. The intermediate base data CSV file [Base data 2022.csv](https://github.com/stuwilmur/GRADE-DOH-data/blob/main/assets/data/BASE%20data%202022.csv) was generated from [Base data 2022.xlsx](https://github.com/stuwilmur/GRADE-DOH-data/blob/main/assets/data/BASE%20data%202022.xlsx) _2022 pop data_ sheet as follows:

- exporting the _2022 pop data_ sheet to .csv format;
- adding the column heading `countryyearcode` to the first column;
- replacing all instances of `#N/A` and `#VALUE!` with `NaN` using find and replace.

4. The final base data CSV file [Base data 2022 interpolated.csv](https://github.com/stuwilmur/GRADE-DOH-data/blob/main/assets/data/BASE%20data%202022%20interpolated.csv), which is used to drive the model, was generated from [Base data 2022.csv](https://github.com/stuwilmur/GRADE-DOH-data/blob/main/assets/data/BASE%20data%202022.csv) by using linear interpolation to interpolate undefined (i.e. null or NaN) values for the following columns:

- School life expectancy, primary and secondary, both sexes (years);
- School percent;
- GRpcUNUWIDER 2022.

The interpolation process was performed using [the Observable notebook interpolate-grade-base-data-2022]([https://observablehq.com/@stuwilmur/interpolate-grade-base-data-2022?collection=@stuwilmur/work-in-progress](https://observablehq.com/@stuwilmur/interpolate-grade-base-data-2022))

5. Finally, the CSV file is packaged as a string [in the source](https://github.com/stuwilmur/GRADE-DOH-data/blob/main/src/data/data.js).
