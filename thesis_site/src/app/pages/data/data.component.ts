import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonsComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-datasets',
  standalone: true,
  imports: [CommonModule, NavButtonsComponent],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DatasetsComponent {
  datasets = [
    {
      title: 'Stellantis Stock Data',
      description: `Contains historical stock prices for Stellantis and Chrysler from January 2, 1990, to December 31, 2024.
The dataset was obtained from CRSP via WRDS and includes the following fields: Company Name, Ticker, Share Code, Open Price, Volume, Alternate Open Price, Asking High Price, Ask Price, Bid Low Price, Bid Price, Returns, Adjusted Returns, New Perm Number, and Delisting Price.
The data selection criteria (WHERE clause) included only rows where price, volume, and returns are not null, and for companies matching: CHRYSLER CORP, FIAT CHRYSLER AUTOMOBILES NV, STELLANTIS NV, DAIMLERCHRYSLER A G, or DAIMLER A G, with share codes 10, 11, or 12.`,
      downloadUrl: '/assets/data/StellantisStock.csv',
      sourceUrl: 'https://wrds-www.wharton.upenn.edu/pages/get-data/center-research-security-prices-crsp/annual-update/stock-security-files/daily-stock-file/'
    },
    {
      title: 'Ford Stock Data',
      description: `Contains historical stock prices for Ford from January 2, 1990, to December 31, 2024.
Data was obtained from CRSP via WRDS and includes: Company Name, Ticker, Open Price, Volume, Alternate Open Price, Asking High Price, Ask Price, Bid Low Price, Bid Price, Returns, Adjusted Returns, New Perm Number, and Delisting Price.
Only rows with non-null price, volume, and returns were included, and the ticker is restricted to F.`,
      downloadUrl: '/assets/data/FordStock.csv',
      sourceUrl: 'https://wrds-www.wharton.upenn.edu/pages/get-data/center-research-security-prices-crsp/annual-update/stock-security-files/daily-stock-file/'
    },
    {
      title: 'General Motors Stock Data',
      description: `Contains historical stock prices for General Motors from January 2, 1990, to December 31, 2024.
Data was obtained from CRSP via WRDS and includes: Company Name, Ticker, Open Price, Volume, Alternate Open Price, Asking High Price, Ask Price, Bid Low Price, Bid Price, Returns, Adjusted Returns, New Perm Number, and Delisting Price.
Only rows with non-null price, volume, and returns were included, and the ticker is restricted to GM.`,
      downloadUrl: '/assets/data/FordStock.csv',
      sourceUrl: 'https://wrds-www.wharton.upenn.edu/pages/get-data/center-research-security-prices-crsp/annual-update/stock-security-files/daily-stock-file/'
    },
    {
      title: 'Detroit Economic Data',
      description: `Measures average economic growth in the Detroit-Warren-Dearborn metropolitan area from February 1990 to December 2019.
The index is computed using a dynamic factor model with 12 variables capturing various aspects of economic activity, calibrated to Gross Metropolitan Product (GMP) growth for cross-area comparison.
Units are percent, seasonally adjusted annual rate, reported monthly. This data was obtained from the Federal Reserve Bank of St. Louis via FRED®.`,
      downloadUrl: '/assets/data/FordStock.csv',
      sourceUrl: 'https://fred.stlouisfed.org/series/DWLAGRIDX'
    },
    {
      title: 'TO DO: ADD THE REST OF THE DETROIT DATASETS',
      description: ``,
      downloadUrl: '',
      sourceUrl: ''
    },
    {
      title: 'TO DO: ADD THE RATIO DATA SETS',
      description: ``,
      downloadUrl: '',
      sourceUrl: ''
    },
  ];

  downloadFileFromUrl(url: string) {
    const filename = url.split('/').pop() || 'file.csv';
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  }

}
