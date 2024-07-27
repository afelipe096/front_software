import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
    selector: 'app-estadisticas',
    templateUrl: './estadisticas.component.html',
    styleUrls: ['./estadisticas.component.css'],
    standalone: true,
    imports: [],


})


export class EstadisticasComponent implements AfterViewInit {


    constructor() { }


    ngAfterViewInit() {
        this.createChart();
    }

    createChart(): void {
        const ctx = document.getElementById('myChart') as HTMLCanvasElement;
        new Chart(ctx, {
            type: 'bar', // Cambia esto al tipo de gráfico que desees
            data: {
                labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado','Domingo'],
                datasets: [{
                    label: 'VENTAS',
                    data: [12, 19, 3, 5, 2, 3,8],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(355, 59, 4, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(355, 59, 4, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {

                    }
                }
            }
        });

        const ctx6 = document.getElementById('myChart6') as HTMLCanvasElement;
        new Chart(ctx6, {
            type: 'line', // Cambia esto al tipo de gráfico que desees
            data: {
                labels: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM','4 PM'],
                datasets: [{
                    label: 'VENTAS X HORA',
                    data: [12, 19, 3, 5, 2, 3,8],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(355, 59, 4, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(355, 59, 4, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {

                    }
                }
            }
        });

        const ctx2 = document.getElementById('myChart2') as HTMLCanvasElement;
        new Chart(ctx2, {
            type: 'doughnut', // Cambia esto al tipo de gráfico que desees
            data: {
                labels: ['ventas', 'meta', ],
                datasets: [{
                    label: 'meta',
                    data: [12, 50],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',

                    ],

                }]
            },

        });

        const ctx3 = document.getElementById('myChart3') as HTMLCanvasElement;
        new Chart(ctx3, {
            type: 'doughnut', // Cambia esto al tipo de gráfico que desees
            data: {
                labels: ['ventas', 'meta', ],
                datasets: [{
                    label: 'meta',
                    data: [30, 50],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',

                    ],

                }]
            },

        });

        const ctx4 = document.getElementById('myChart4') as HTMLCanvasElement;
        new Chart(ctx4, {
            type: 'doughnut', // Cambia esto al tipo de gráfico que desees
            data: {
                labels: ['ventas', 'meta', ],
                datasets: [{
                    label: 'meta',
                    data: [42, 50],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',

                    ],

                }]
            },

        });


        const ctx5 = document.getElementById('myChart5') as HTMLCanvasElement;
        new Chart(ctx5, {
            type: 'doughnut', // Cambia esto al tipo de gráfico que desees
            data: {
                labels: ['ventas', 'meta', ],
                datasets: [{
                    label: 'meta',
                    data: [2, 50],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',

                    ],

                }]
            },

        });


    }
    }


