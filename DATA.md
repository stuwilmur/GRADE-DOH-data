# Data sources and pipeline for major versions > 1

1. The origin base data database Excel workbook [BASE data 2023.xlsx](./assets/data/BASE%20data%2029.08.2023.xlsx) was prepared by Bernadette O'Hare, using data from the WDI and UNU WIDER datasets. Detailed notes on the data sources and preparation are contained in the _info_ sheet of the workbook.

2. The intermediate base data CSV file [Base data 2023.csv](./assets/data/BASE%20data%202023.csv) was generated from [Base data 2023.xlsx](./assets/data/BASE%20data%202023.xlsx) _data_ sheet as follows:

- exporting the _data_ sheet to .csv format;
- making the spacing in column heading names consistent;
- renaming the column heading `id` to `countryyearcode` in the first column;
- replacing all instances of `#N/A`, `..` and `#VALUE!` with `NaN` using find and replace.

4. The final base data CSV file [Base data 2023 interpolated.csv](./assets/data/BASE%20data%202023%20interpolated.csv), which is used to drive the model, was generated from [Base data 2023.csv](./assets/data/BASE%20data%202023.csv) by using linear interpolation implemented [this notebook](https://observablehq.com/@grade/interpolate-grade-base-data-2023) to interpolate undefined (i.e. null or NaN) values for _GRPC_ and _all school measures_, i.e. in-school measures and school populations.

5. Finally, the CSV file is packaged as a string [in the source](./src/data/data.js).
