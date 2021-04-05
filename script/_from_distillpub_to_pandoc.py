#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys,re; 

if __name__ == "__main__":
    s = ""
    lines = sys.stdin.readlines()
    for line in lines:
        line = re.sub('<d-cite +key="(.*)">.*</d-cite>', "[@\g<1>]", line)
        for match in re.finditer("\[@(.*)\]", line):
            citations = match.group(1)
            new_citations = ";@".join(citations.split(","))
            line = line.replace(citations, new_citations)
        s += line 

    s += "\n## References\n"
    print(s)

