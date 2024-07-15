# Data sources and pipeline for major versions > 2

1. The origin base data database Excel workbook [BASE data 2023.xlsx](./assets/data/BASE%20data%2029.08.2023.xlsx) was prepared by Bernadette O'Hare, using data from the WDI and UNU WIDER datasets. Detailed notes on the data sources and preparation are contained in the _info_ sheet of the workbook.

1. The intermediate base data CSV file [Base data 2023.csv](./assets/data/BASE%20data%202023.csv) was generated from [Base data 2023.xlsx](./assets/data/BASE%20data%202023.xlsx) _data_ sheet as follows:

- exporting the _data_ sheet to .csv format;
- making the spacing in column heading names consistent;
- renaming the column heading `id` to `countryyearcode` in the first column;
- replacing all instances of `#N/A`, `..` and `#VALUE!` with `NaN` using find and replace.

1. The subsequent intermediate base data CSV file [Base data 2023 interpolated.csv](./assets/data/BASE%20data%202023%20interpolated.csv) was generated from [Base data 2023.csv](./assets/data/BASE%20data%202023.csv) by using linear interpolation implemented [this notebook](https://observablehq.com/@grade/interpolate-grade-base-data-2023) to interpolate undefined (i.e. null or NaN) values for _GRPC_ and _all school measures_, i.e. in-school measures and school populations.

1. The origin teacher base data database Excel workbook [Teacher model.xlsx](./assets/data/Teacher%20model.xlsx) was prepared by Stephen Hall, using data from UNESCO. Detailed notes on the data sources and preparation are contained in the **TODO**.

1. The data in the previous spreadsheet was combined onto a separate sheet "combined" in the workbook [Teacher base data.xlsx](./assets/data/Teacher%20base%20data.xlsx), and columns were added calculating the inverse of each measure (i.e. the pupil to teacher ratio).

1. The "combined" sheet from the previous workbook was exported as a CSV file, [teacher base data.csv](./assets/data/teacher%20base%20data.csv).

1. The final CSV file used to drive the model, [BASE data 2023 interpolated plus teachers.csv](./assets/data/BASE%20data%202023%20interpolated%20plus%20teachers.csv) was prepared by assimilating the data in [teacher base data.csv](./assets/data/teacher%20base%20data.csv) with [Base data 2023 interpolated.csv](./assets/data/BASE%20data%202023%20interpolated.csv) using [this Observable notebook](https://observablehq.com/@grade/knit-grade-base-and-teacher-data).

1. Finally, the CSV file is packaged as a string [in the source](./src/data/data.js).
