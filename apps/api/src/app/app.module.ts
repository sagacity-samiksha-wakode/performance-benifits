import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { Module } from '@nestjs/common';
import { PerformanceTable2Service } from './performance-table2.service';

@Module({
  imports: [HttpClientModule],
  controllers: [AppController],
  providers: [AppService,PerformanceTable2Service],
})
export class AppModule {}
