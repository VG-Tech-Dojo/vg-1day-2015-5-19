//
//  Message.swift
//  My1DayApp
//
//  Created by 清 貴幸 on 2015/05/15.
//  Copyright (c) 2015年 VOYAGE GROUP, inc. All rights reserved.
//

import UIKit

class Message {
    let body: String!
    let icon: UIImage?
    
    init?(dictionary: [String: AnyObject]) {
        if let body: String = dictionary["body"] as? String, let icon: String = dictionary["icon"] as? String {
            self.body = body
            self.icon = ImageHelper.imageWithBase64EncodedString(icon)
        } else {
            self.body = nil
            self.icon = nil
            return nil
        }
    }
}
