package com.ayush.bill_flow.controller;

import com.ayush.bill_flow.dto.dashboard.DateRangeRequest;
import com.ayush.bill_flow.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    DashboardService dashboardService;

    @GetMapping("/{shopId}")
    public ResponseEntity<?> getDashBoard(@PathVariable Long shopId){
        return dashboardService.getDashboard(shopId);
    }

    @GetMapping("/profit")
    public ResponseEntity<?> getProfitInRange(@RequestBody DateRangeRequest dateRangeRequest){
        return dashboardService.getProfitInRange(dateRangeRequest);
    }

    @GetMapping("/sale")
    public ResponseEntity<?> getItemSoldInRange(@RequestBody DateRangeRequest dateRangeRequest){
        return dashboardService.getItemSoldInRange(dateRangeRequest);
    }

}
