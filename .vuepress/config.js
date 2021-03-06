const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Docker 厉飞羽的学习之路",
  base: "/",
  head: [
    [
      "script",
      {},
      `
  var _hmt = _hmt || [];
  (function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?81a3490c9cd141dbcf6d00bc18b6edae";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
  })();
`
    ],
    [
      "script",
      {},
      `
  (function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
  `
    ]
  ],
  plugins: {
    // sitemap: {
    //   hostname: 'https://vuepress.mirror.docker-practice.com'
    // },
    // 'git-log': {
    //   additionalArgs: '--no-merge',
    //   onlyFirstAndLastCommit: true,
    // },
  },
  themeConfig: {
    baseLang: "zh-CN",
    blog: false,
    // comment: false,
    comment: {
      type: "disable", // 使用 Valine
      appId: "...", // your appId
      appKey: "..." // your appKey
    },
    pageInfo: [
      // 'author',
      "reading-time",
      "word"
    ],
    footer: {
      content:
        "Made with <a target='_blank' href='https://github.com/mister-hope/vuepress-theme-hope'>vuepress-theme-hope</a>",
      display: true,
      copyright: false
    },
    searchPlaceholder: "Search",
    repo: "baichaohua/learn_docker",
    repoLabel: "本站源码",
    hostname: "https://docker.baichaohua.com",
    // author: 'yeasy',
    mdEnhance: {
      lineNumbers: true
    },
    themeColor: {
      blue: "#2196f3"
      // red: '#f26d6d',
      // green: '#3eaf7c',
      // orange: '#fb9b5f'
    },

    //

    showAds: false,

    docsRepo: "yeasy/docker_practice",
    docsDir: "/",
    docsBranch: "master",
    editLinks: true,
    nav: [
      {
        text: "安装 Docker",
        link: "/install/"
      },
      {
        text: "Docker 入门",
        link: "/"
      },
      {
        text: "Docker 实战",
        link: "/cases/os/"
      },
      {
        text: "CI/CD",
        link: "/cases/ci/"
      },
      {
        text: "Compose",
        link: "/compose/"
      },
      {
        text: "Kubernetes",
        link: "/kubernetes/"
      },
      {
        text: "云计算",
        link: "/cloud/"
      }
    ],
    sidebar: {
      "/cloud/": ["intro", "tencentCloud", "alicloud", "aws", "summary"],
      "/kubernetes/": [
        "intro",
        "concepts",
        "design",
        {
          title: "部署 Kubernetes",
          collapsable: false,
          children: [
            "setup/",
            "setup/kubeadm",
            "setup/docker-desktop",
            "setup/systemd",
            "setup/dashboard"
          ]
        },
        {
          title: "Kubernetes 命令行 kubectl",
          collapsable: false,
          children: ["kubectl/"]
        }
      ],
      "/compose/": [
        "introduction",
        "install",
        "usage",
        "commands",
        "compose_file",
        "django",
        "rails",
        "wordpress",
        "lnmp"
      ],
      "/install/": [
        "ubuntu",
        "debian",
        "fedora",
        "centos",
        "raspberry-pi",
        "offline",
        "mac",
        "windows",
        "mirror",
        "experimental"
      ],
      "/cases/os/": [
        {
          title: "操作系统",
          collapsable: false,
          children: ["busybox", "alpine", "debian", "centos", "summary"]
        },
        {
          title: "在 IDE 中使用 Docker",
          collapsable: false,
          children: ["/ide/", "/ide/vsCode"]
        }
      ],
      "/cases/ci/": [
        "actions/",
        {
          title: "Drone",
          collapsable: false,
          children: ["drone/", "drone/install"]
        }
      ],
      "/": [
        "/",
        "/CHANGELOG",
        "/CONTRIBUTING",
        {
          title: "Docker 简介",
          collapsable: false,
          children: ["introduction/", "introduction/what", "introduction/why"]
        },
        {
          title: "基本概念",
          collapsable: false,
          children: [
            "basic_concept/",
            "basic_concept/image",
            "basic_concept/container",
            "basic_concept/repository"
          ]
        },
        {
          title: "使用镜像",
          collapsable: false,
          children: [
            "image/",
            "image/pull",
            "image/list",
            "image/rm",
            "image/commit",
            "image/build",
            "image/other.md",
            "image/internal.md"
          ]
        },
        {
          title: "Dockerfile",
          collapsable: true,
          children: [
            "image/dockerfile/",
            "image/dockerfile/copy",
            "image/dockerfile/add",
            "image/dockerfile/cmd",
            "image/dockerfile/entrypoint",
            "image/dockerfile/env",
            "image/dockerfile/arg",
            "image/dockerfile/volume",
            "image/dockerfile/expose",
            "image/dockerfile/workdir",
            "image/dockerfile/user",
            "image/dockerfile/healthcheck",
            "image/dockerfile/label",
            "image/dockerfile/shell",
            "image/dockerfile/onbuild",
            "image/dockerfile/references",
            "image/multistage-builds/",
            "image/multistage-builds/laravel",
            "image/manifest"
          ]
        },
        {
          title: "操作容器",
          collapsable: false,
          children: [
            "container/",
            "container/run",
            "container/daemon",
            "container/stop",
            "container/attach_exec",
            "container/import_export",
            "container/rm"
          ]
        },
        {
          title: "Docker 仓库",
          collapsable: false,
          children: [
            "repository/",
            "repository/dockerhub",
            "repository/registry",
            "repository/registry_auth",
            "repository/nexus3_registry"
          ]
        },
        {
          title: "数据管理",
          collapsable: false,
          children: [
            "data_management/",
            "data_management/volume",
            "data_management/bind-mounts"
          ]
        },
        {
          title: "使用网络",
          collapsable: false,
          children: [
            "network/",
            "network/port_mapping",
            "network/linking",
            "network/dns"
          ]
        },
        {
          title: "高级网络配置",
          collapsable: false,
          children: [
            "advanced_network/",
            "advanced_network/quick_guide",
            "advanced_network/access_control",
            "advanced_network/port_mapping",
            "advanced_network/bridge",
            "advanced_network/example",
            "advanced_network/config_file",
            "advanced_network/ptp"
          ]
        },
        {
          title: "Swarm mode",
          collapsable: false,
          children: [
            "swarm_mode/",
            "swarm_mode/overview",
            "swarm_mode/create",
            "swarm_mode/deploy",
            "swarm_mode/stack",
            "swarm_mode/secret",
            "swarm_mode/config",
            "swarm_mode/rolling_update"
          ]
        },
        {
          title: "安全",
          collapsable: false,
          children: [
            "security/",
            "security/kernel_ns",
            "security/control_group",
            "security/daemon_sec",
            "security/kernel_capability",
            "security/other_feature",
            "security/summary"
          ]
        },
        {
          title: "底层实现",
          collapsable: false,
          children: [
            "underly/",
            "underly/arch",
            "underly/namespace",
            "underly/cgroups",
            "underly/ufs",
            "underly/container_format",
            "underly/network"
          ]
        },
        {
          title: "Docker Buildx",
          collapsable: false,
          children: [
            "buildx/",
            "buildx/buildkit",
            "buildx/buildx",
            "buildx/multi-arch-images"
          ]
        },
        {
          title: "Etcd",
          collapsable: false,
          children: [
            "etcd/",
            "etcd/intro",
            "etcd/install",
            "etcd/cluster",
            "etcd/etcdctl"
          ]
        },
        {
          title: "Fedora CoreOS",
          collapsable: false,
          children: ["coreos/", "coreos/intro", "coreos/install"]
        },
        "podman/",
        "appendix/faq/",
        {
          title: "热门镜像介绍",
          collapsable: false,
          children: [
            "appendix/repo/",
            "appendix/repo/ubuntu",
            "appendix/repo/centos",
            "appendix/repo/nginx",
            "appendix/repo/php",
            "appendix/repo/nodejs",
            "appendix/repo/mysql",
            "appendix/repo/wordpress",
            "appendix/repo/mongodb",
            "appendix/repo/redis",
            "appendix/repo/minio"
          ]
        },
        {
          title: "Docker 命令",
          collapsable: false,
          children: [
            "appendix/command/",
            "appendix/command/docker",
            "appendix/command/dockerd"
          ]
        },
        "appendix/best_practices",
        "appendix/debug",
        "appendix/resources"
      ]
    }
  }
});
